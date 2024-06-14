import { format, startOfDay, addDays, isSameDay } from 'date-fns';
import { uk } from 'date-fns/locale';
import '../../sass/components/_modal.scss'
import '../../sass/components/_booking.scss'
// import '../../sass/components/_leftmodal.scss'
import Button from '../../components/Button/Button'
import { useEffect, useMemo, useState } from 'react';
import Slot from '../../components/Button/Slot';
import DownModal from '../../components/Modals/DownModal/DownModal'
import PaymentContent from './PaymentContent';
import { MdArrowBackIosNew } from "react-icons/md";

interface TimeSlot {
  start: string;
  end: string;
}

interface HoursSlot {
  selectedHours: number;
  selectedPrice: number;
  closeModal: () => void;
}

const BookingContent: React.FC<HoursSlot>= ({selectedHours, selectedPrice, closeModal}) => {
  const [daysOfMonth, setDaysOfMonth] = useState<Date[]>([]);
  const [availableTimes, setAvailableTimes] = useState<Record<string, TimeSlot[]>>({});
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(true);

  const initialDaysToShow = 3; 

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
        const startHourFormatted = `${i < 10 ? '0' : ''}${i}:00`;
        const endHourFormatted = `${i + hours < 10 ? '0' : ''}${i + hours}:00`;
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
      const availableHours: TimeSlot[] = generateAvailableHours(selectedHours, day);
      initialAvailableTimes[format(day, 'yyyy-MM-dd')] = availableHours;
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
      const availableHours: TimeSlot[] = generateAvailableHours(selectedHours, day);
      newAvailableTimes[format(day, 'yyyy-MM-dd')] = availableHours;
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
    <div className='modal__container rightmodal'>
      <button type='button' onClick={closeModal} className='modal__arrowback'>
            <MdArrowBackIosNew/>
            </button>
      <ul className='modal__list booking__list'>
        {daysOfMonth.map(day => (
          <li key={day.getTime()} className='modal__item'>
            <p className='booking__title'>{capitalizeFirstLetter(format(day, 'EEEE, d MMMM', { locale: uk }))}</p>
            <ul className="slots__list">
              {availableTimes[format(day, 'yyyy-MM-dd')]?.map((slot, index) => (
                <li key={index} >
                  <Slot
                    text={`${slot.start}-${slot.end}`}
                    onClick={() => handleBooking(day, slot)}
                    className={`slot ${selectedData?.getTime() === day.getTime() && selectedSlot?.start === slot.start && selectedSlot?.end === slot.end ? 'selected' : ''}`} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <DownModal
        openModal={openModal}
      showFeedback={showFeedback}
      closeModal={closeDownModal}
      selectedData={selectedData}
        selectedSlot={selectedSlot}>
        <PaymentContent
          closeModal={closeDownModal}
          selectedData={selectedData}
          selectedSlot={selectedSlot}
          selectedPrice={selectedPrice}
        />
      </DownModal>
    
      {showLoadMore ? (
        <Button type='button' className={'btn btn__feedback'} text={'Завантажити ще'} onClick={handleLoadMore} />
      ) : (
          <Button type='button' className={'btn btn__booking'} text={'Забронювати'}  onClick={openModal}  />
      )
    }
    </div>
  )
}

export default BookingContent
