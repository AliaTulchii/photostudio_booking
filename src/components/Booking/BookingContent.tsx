// import React, { useEffect, useMemo, useState } from "react";
// import { format, startOfDay, addDays, isSameDay, parseISO, isValid } from "date-fns";
// import { uk } from "date-fns/locale";
// import "../../sass/components/_modal.scss";
// import "../../sass/components/_booking.scss";
// import Button from "../../components/Button/Button";
// import Slot from "../../components/Button/Slot";
// import DownModal from "../../components/Modals/DownModal/DownModal";
// import PaymentContent from "./PaymentContent";
// import { MdArrowBackIosNew } from "react-icons/md";
// import axios from "axios";

// interface TimeSlot {
//   start: string;
//   end: string;
// }

// interface HoursSlot {
//   selectedHours: number;
//   selectedPrice: number;
//   closeModal: () => void;
// }

// const BookingContent: React.FC<HoursSlot> = ({
//   selectedHours,
//   selectedPrice,
//   closeModal,
// }) => {
//   const [daysOfMonth, setDaysOfMonth] = useState<Date[]>([]);
//   const [availableTimes, setAvailableTimes] = useState<Record<string, TimeSlot[]>>({});
//   const [bookedDates, setBookedDates] = useState<Record<string, TimeSlot[]>>({});
//   const [showFeedback, setShowFeedback] = useState<boolean>(false);
//   const [selectedData, setSelectedData] = useState<Date | null>(null);
//   const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
//   const [showLoadMore, setShowLoadMore] = useState<boolean>(true);

//   const initialDaysToShow = 3;

//   useEffect(() => {
//     const fetchBookedDates = async () => {
//       try {
//         const response = await axios.get("https://art-studio-api.onrender.com/api/bookings/all");
//         const booked = response.data.reduce((acc: Record<string, TimeSlot[]>, booking: any) => {
//           if (booking.date) {
//             const date = format(new Date(booking.date), "yyyy-MM-dd");
//             const timeSlot: TimeSlot = { start: booking.start, end: booking.end };
//             if (acc[date]) {
//               acc[date].push(timeSlot);
//             } else {
//               acc[date] = [timeSlot];
//             }
//           } else {
//             console.error("Invalid date format:", booking.date);
//           }
//           return acc;
//         }, {});
//         setBookedDates(booked);
//       } catch (error) {
//         console.error("Error fetching booked dates:", error);
//       }
//     };

//     fetchBookedDates();
//   }, []);
  
//   const generateAvailableHours = (hours: number, day: Date): TimeSlot[] => {
//     const startHour = 9;
//     const endHour = 21;
//     const interval = hours;
//     const availableHours: TimeSlot[] = [];
//     const currentTime = new Date();

//     for (let i = startHour; i <= endHour - hours; i += interval) {
//       const slotStart = new Date(day);
//       slotStart.setHours(i, 0, 0, 0);

//       if (!isSameDay(currentTime, day) || slotStart > currentTime) {
//         const startHourFormatted = `${i < 10 ? "0" : ""}${i}:00`;
//         const endHourFormatted = `${i + hours < 10 ? "0" : ""}${i + hours}:00`;
//         availableHours.push({
//           start: startHourFormatted,
//           end: endHourFormatted,
//         });
//       }
//     }
//     return availableHours;
//   };

//   const initialSetup = useMemo(() => {
//     const currentDate = new Date();
//     const startOfToday = startOfDay(currentDate);
//     const initialDays: Date[] = [startOfToday];

//     for (let i = 1; i < initialDaysToShow; i++) {
//       initialDays.push(addDays(initialDays[i - 1], 1));
//     }

//     const initialAvailableTimes: Record<string, TimeSlot[]> = {};
//     initialDays.forEach((day) => {
//       const availableHours: TimeSlot[] = generateAvailableHours(
//         selectedHours,
//         day
//       );
//       initialAvailableTimes[format(day, "yyyy-MM-dd")] = availableHours;
//     });

//     return { initialDays, initialAvailableTimes };
//   }, [selectedHours]);

//   useEffect(() => {
//     setDaysOfMonth(initialSetup.initialDays);
//     setAvailableTimes(initialSetup.initialAvailableTimes);
//   }, [initialSetup]);

//   const capitalizeFirstLetter = (string: string): string => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   const handleLoadMore = () => {
//     const newDays: Date[] = [];
//     const lastDay = daysOfMonth[daysOfMonth.length - 1];

//     for (let i = 1; i <= initialDaysToShow; i++) {
//       newDays.push(addDays(lastDay, i));
//     }

//     const newAvailableTimes = { ...availableTimes };

//     newDays.forEach((day) => {
//       const availableHours: TimeSlot[] = generateAvailableHours(
//         selectedHours,
//         day
//       );
//       newAvailableTimes[format(day, "yyyy-MM-dd")] = availableHours;
//     });

//     setDaysOfMonth((prevDays) => [...prevDays, ...newDays]);
//     setAvailableTimes(newAvailableTimes);
//   };

//   const handleBooking = (day: Date, slot: TimeSlot) => {
//     if (
//       selectedData?.getTime() === day.getTime() &&
//       selectedSlot?.start === slot.start &&
//       selectedSlot?.end === slot.end
//     ) {
//       setSelectedData(null);
//       setSelectedSlot(null);
//       setShowLoadMore(true);
//     } else {
//       setSelectedData(day);
//       setSelectedSlot(slot);
//       setShowLoadMore(false);
//     }
//   };

//   const openModal = () => {
//     setShowFeedback(true);
//   };

//   const closeDownModal = () => {
//     setShowFeedback(false);
//   };

//   return (
//     <div className="modal__container rightmodal">
//       <button type="button" onClick={closeModal} className="modal__arrowback">
//         <MdArrowBackIosNew />
//       </button>
//       <ul className="modal__list booking__list">
//         {daysOfMonth.map((day) => (
//           <li key={day.getTime()} className="modal__item">
//             <p className="booking__title">
//               {capitalizeFirstLetter(format(day, "EEEE, d MMMM", { locale: uk }))}
//             </p>
//             <ul className="slots__list">
//             {availableTimes[format(day, "yyyy-MM-dd")]?.map((slot, index) => {
//                 const isBooked = bookedDates[format(day, "yyyy-MM-dd")]?.some(
//                   (bookedSlot) =>
//                     bookedSlot.start === slot.start && bookedSlot.end === slot.end
//                 );

//                 return (
//                   <li key={index}>
//                     <Slot
//                       text={`${slot.start}-${slot.end}`}
//                       onClick={() => handleBooking(day, slot)}
//                       className={`slot ${
//                         selectedData?.getTime() === day.getTime() &&
//                         selectedSlot?.start === slot.start &&
//                         selectedSlot?.end === slot.end
//                           ? "selected"
//                           : ""
//                       } ${isBooked ? "booked" : ""}`}
//                       disabled={isBooked}
//                     />
//                   </li>
//                 );
//               })}
//             </ul>
//           </li>
//         ))}
//       </ul>
//       <DownModal
//         openModal={openModal}
//         showFeedback={showFeedback}
//         closeModal={closeDownModal}
//         selectedData={selectedData}
//         selectedSlot={selectedSlot}
//       >
//         <PaymentContent
//           closeModal={closeDownModal}
//           selectedData={selectedData}
//           selectedSlot={selectedSlot}
//           selectedPrice={selectedPrice}
//         />
//       </DownModal>

//       {showLoadMore ? (
//         <Button
//           type="button"
//           className={"btn btn__feedback"}
//           text={"Завантажити ще"}
//           onClick={handleLoadMore}
//         />
//       ) : (
//         <Button
//           type="button"
//           className={"btn btn__booking"}
//           text={"Забронювати"}
//           onClick={openModal}
//         />
//       )}
//     </div>
//   );
// };

// export default BookingContent;

import React, { useEffect, useMemo, useState } from "react";
import { format, startOfDay, addDays, isSameDay } from "date-fns";
import { toDate, format as formatWithTZ } from "date-fns-tz";
import { uk } from "date-fns/locale";
import "../../sass/components/_modal.scss";
import "../../sass/components/_booking.scss";
import Button from "../../components/Button/Button";
import Slot from "../../components/Button/Slot";
import DownModal from "../../components/Modals/DownModal/DownModal";
import PaymentContent from "./PaymentContent";
import { MdArrowBackIosNew } from "react-icons/md";
import axios from "axios";

type TimeSlot = {
  start: string;
  end: string;
  disabled?: boolean;
};

interface HoursSlot {
  selectedHours: number;
  selectedPrice: number;
  closeModal: () => void;
}

const BookingContent: React.FC<HoursSlot> = ({
  selectedHours,
  selectedPrice,
  closeModal,
}) => {
  const [daysOfMonth, setDaysOfMonth] = useState<Date[]>([]);
  const [availableTimes, setAvailableTimes] = useState<Record<string, TimeSlot[]>>({});
  const [bookedDates, setBookedDates] = useState<Record<string, TimeSlot[]>>({});
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(true);

  const initialDaysToShow = 3;

  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const response = await axios.get("https://art-studio-api.onrender.com/api/bookings/all");
        console.log("Response from backend:", response.data); // Виводимо отримані дані з бекенду
        const approvedBookings = response.data.filter((booking: any) => {
          return (
            booking.bookingDate &&
            booking.paymentStatus === "Approved"
          );
        });
        console.log("Approved bookings:", approvedBookings); // Виводимо тільки затверджені бронювання
  
        const booked = approvedBookings.reduce((acc: Record<string, TimeSlot[]>, booking: any) => {
          const date = new Date(booking.bookingDate);
          const timeZone = 'Europe/Kiev'; // Ваша часова зона
          const zonedDate = toDate(date, { timeZone }); // Перетворюємо UTC дату в потрібну часову зону
          
          if (!Number.isNaN(zonedDate.getTime())) {
            const formattedDate = formatWithTZ(zonedDate, "yyyy-MM-dd", { timeZone });
            // Only store the date itself
            const timeSlot: TimeSlot = {
              start: formatWithTZ(zonedDate, "HH:mm", { timeZone }), // Assuming you want to start from the beginning of the hour
              end: formatWithTZ(new Date(zonedDate.getTime() + 3600000), "HH:mm", { timeZone }), // Assuming a one hour time slot
              disabled: true, // Mark as disabled
            };
            if (acc[formattedDate]) {
              acc[formattedDate].push(timeSlot);
            } else {
              acc[formattedDate] = [timeSlot];
            }
          } else {
            console.error("Invalid date format or date not parseable:", booking.bookingDate);
          }
          return acc;
        }, {});
  
        setBookedDates(booked);
      } catch (error) {
        console.error("Error fetching booked dates:", error);
      }
    };
  
    fetchBookedDates();
  }, []);

  const generateAvailableHours = (hours: number, day: Date): TimeSlot[] => {
    const startHour = 9;
    const endHour = 21;
    const interval = hours;
    const availableHours: TimeSlot[] = [];
    const currentTime = new Date();

    for (let i = startHour; i <= endHour - hours; i += interval) {
      const slotStart = new Date(day);
      slotStart.setHours(i, 0, 0, 0);

      if (!isSameDay(currentTime, day) || slotStart > currentTime) {
        const startHourFormatted = `${i < 10 ? "0" : ""}${i}:00`;
        const endHourFormatted = `${i + hours < 10 ? "0" : ""}${i + hours}:00`;
        availableHours.push({
          start: startHourFormatted,
          end: endHourFormatted,
        });
      }
    }
    return availableHours;
  };

  const initialSetup = useMemo(() => {
    const currentDate = new Date();
    const startOfToday = startOfDay(currentDate);
    const initialDays: Date[] = [startOfToday];

    for (let i = 1; i < initialDaysToShow; i++) {
      initialDays.push(addDays(initialDays[i - 1], 1));
    }

    const initialAvailableTimes: Record<string, TimeSlot[]> = {};
    initialDays.forEach((day) => {
      const availableHours: TimeSlot[] = generateAvailableHours(
        selectedHours,
        day
      );
      initialAvailableTimes[format(day, "yyyy-MM-dd")] = availableHours;
    });

    return { initialDays, initialAvailableTimes };
  }, [selectedHours]);

  useEffect(() => {
    setDaysOfMonth(initialSetup.initialDays);
    setAvailableTimes(initialSetup.initialAvailableTimes);
  }, [initialSetup]);

  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleLoadMore = () => {
    const newDays: Date[] = [];
    const lastDay = daysOfMonth[daysOfMonth.length - 1];

    for (let i = 1; i <= initialDaysToShow; i++) {
      newDays.push(addDays(lastDay, i));
    }

    const newAvailableTimes = { ...availableTimes };

    newDays.forEach((day) => {
      const availableHours: TimeSlot[] = generateAvailableHours(
        selectedHours,
        day
      );
      newAvailableTimes[format(day, "yyyy-MM-dd")] = availableHours;
    });

    setDaysOfMonth((prevDays) => [...prevDays, ...newDays]);
    setAvailableTimes(newAvailableTimes);
  };

  const handleBooking = (day: Date, slot: TimeSlot) => {
    if (
      selectedData?.getTime() === day.getTime() &&
      selectedSlot?.start === slot.start &&
      selectedSlot?.end === slot.end
    ) {
      setSelectedData(null);
      setSelectedSlot(null);
      setShowLoadMore(true);
    } else {
      setSelectedData(day);
      setSelectedSlot(slot);
      setShowLoadMore(false);
    }
  };

  const openModal = () => {
    setShowFeedback(true);
  };

  const closeDownModal = () => {
    setShowFeedback(false);
  };

  return (
    <div className="modal__container rightmodal">
      <button type="button" onClick={closeModal} className="modal__arrowback">
        <MdArrowBackIosNew />
      </button>
      <ul className="modal__list booking__list">
        {daysOfMonth.map((day) => (
          <li key={day.getTime()} className="modal__item">
            <p className="booking__title">
              {capitalizeFirstLetter(format(day, "EEEE, d MMMM", { locale: uk }))}
            </p>
            <ul className="slots__list">
              {availableTimes[format(day, "yyyy-MM-dd")]?.map((slot, index) => {
                const isBooked = bookedDates[format(day, "yyyy-MM-dd")]?.some(
                  (bookedSlot) =>
                    bookedSlot.start === slot.start && bookedSlot.end === slot.end
                );

                return (
                  <li key={index}>
                    <Slot
                      text={`${slot.start}-${slot.end}`}
                      onClick={() => handleBooking(day, slot)}
                      className={`slot ${
                        selectedData?.getTime() === day.getTime() &&
                        selectedSlot?.start === slot.start &&
                        selectedSlot?.end === slot.end
                          ? "selected"
                          : ""
                      } ${isBooked ? "booked" : ""}`}
                      disabled={isBooked}
                    />
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
      <DownModal
        openModal={openModal}
        showFeedback={showFeedback}
        closeModal={closeDownModal}
        selectedData={selectedData}
        selectedSlot={selectedSlot}
      >
        <PaymentContent
          closeModal={closeDownModal}
          selectedData={selectedData}
          selectedSlot={selectedSlot}
          selectedPrice={selectedPrice}
        />
      </DownModal>

      {showLoadMore ? (
        <Button
          type="button"
          className={"btn btn__feedback"}
          text={"Завантажити ще"}
          onClick={handleLoadMore}
        />
      ) : (
        <Button
          type="button"
          className={"btn btn__booking"}
          text={"Забронювати"}
          onClick={openModal}
        />
      )}
    </div>
  );
};

export default BookingContent;
