// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { IoClose } from "react-icons/io5";
// import "../../sass/components/_payment.scss";
// import axios from "axios";

// interface PaymentContentProps {
//   closeModal: () => void;
//   selectedData: Date | null;
//   selectedSlot: { start: string; end: string } | null;
//   selectedPrice: number;
// }

// const PaymentContent: React.FC<PaymentContentProps> = ({
//   selectedData,
//   selectedSlot,
//   selectedPrice,
//   closeModal,
// }) => {
//   const [form, setForm] = useState({
//     name: "",
//     number: "",
//     email: "",
//   });

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, name } = e.target;

//     setForm((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       console.log("Submitting form...");
//       const response = await axios.post(
//         `https://art-studio-api.onrender.com/api/bookings/book?price=1`,
//         // {
//         //   name: form.name,
//         //   number: form.number,
//         //   email: form.email,
//         // }
//       );
//       console.log(response)

//       const booking = response.data.booking;
//       const bookingId = booking._id;

//       console.log("Booking request status:", response.status);
//       console.log("Booking request response:", booking);

//       setForm({
//         name: "",
//         number: "",
//         email: "",
//       });

//       setTimeout(async () => {
//         console.log("Fetching payment URL...");
//         const paymentResponse = await axios.get(
//           `https://art-studio-api.onrender.com/api/payments/payment-form?currency=UAH&productName[]=photosession&productCount[]=1&bookingId=${bookingId}`
//         );

//         console.log("Payment request status:", paymentResponse.status);
//         console.log("Payment request response:", paymentResponse.data);

//         if (paymentResponse.status === 200) {
//           window.location.href = `https://art-studio-api.onrender.com/api/payments/payment-form?currency=UAH&productName[]=photosession&productCount[]=1&bookingId=${bookingId}`;
//         } else {
//           console.error("Error in payment request:", paymentResponse.data);
//         }
//       }, 10000);
//     } catch (error) {
//       console.error("Error submitting the form", error);
//     }
//   };




//   return (
//     <motion.div
//       onClick={(e) => e.stopPropagation()}
//       initial={{ y: "100%" }}
//       animate={{ y: "0%" }}
//       exit={{ y: "100%" }}
//       transition={{ duration: 0.5 }}
//       className="feedback__content container"
//     >
//       <div className="box__payment">
//         <h1 className="title">Оплата</h1>
//         <button className="payment__btn" onClick={closeModal}>
//           <IoClose className="feedback__close" />
//         </button>
//       </div>

//       <div className="box__booking">
//         <h2 className="payment__subtitle">Бронювання:</h2>
//         <p className="payment__text">
//           {selectedData?.toLocaleDateString()}{" "}
//           {selectedSlot ? `${selectedSlot.start}-${selectedSlot.end}` : ""}
//         </p>
//       </div>

//       <div className="box__line" />

//       <div className="feedback__formbox">
//         <form action="" className="form" onSubmit={handleSubmit}>
//           <div className="form__inputs">
//             <input
//               name="name"
//               value={form.name}
//               onChange={onChange}
//               placeholder="Ваше ім’я"
//               className="form__input form__name"
//             />
//             <input
//               name="number"
//               value={form.number}
//               onChange={onChange}
//               placeholder="Номер телефону"
//               className="form__input form__name"
//             />
//             <input
//               name="email"
//               value={form.email}
//               onChange={onChange}
//               placeholder="E-mail адреса"
//               className="form__input form__name"
//             />
//           </div>

//           <div className="box__topay">
//             <h2 className="payment__subtitle">До сплати:</h2>
//             <p className="payment__text">{selectedPrice} грн</p>
//           </div>

          

//           <button type="submit" className="btn btn__booking">
//             Сплатити
//           </button>
//         </form>
//       </div>
//     </motion.div>
//   );
// };

// export default PaymentContent;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import "../../sass/components/_payment.scss";
import axios from "axios";
import { format } from "date-fns";
import { toDate } from "date-fns-tz";

interface PaymentContentProps {
  closeModal: () => void;
  selectedData: Date | null;
  selectedSlot: { start: string; end: string } | null;
  selectedPrice: number;
}

const PaymentContent: React.FC<PaymentContentProps> = ({
  selectedData,
  selectedSlot,
  selectedPrice,
  closeModal,
}) => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedData || !selectedSlot) {
      console.error("Missing booking date or slot");
      return;
    }

    const timeZone = "Europe/Kiev";
    const selectedStartDate = new Date(
      `${format(selectedData, "yyyy-MM-dd")}T${selectedSlot.start}:00`
    );

    const zonedDate = toDate(selectedStartDate, { timeZone });
    const bookingDate = zonedDate.toISOString();

    console.log("Selected start date:", selectedStartDate);
    console.log("Zoned date:", zonedDate);
    console.log("Booking date (ISO):", bookingDate);

    try {
      console.log("Submitting form...");
      console.log("Form data:", form);
      console.log("Selected data:", selectedData);
      console.log("Selected slot:", selectedSlot);
      const response = await axios.post(
        `https://art-studio-api.onrender.com/api/bookings/book?price=1`,
        {
          name: form.name,
          number: form.number,
          email: form.email,
          bookingDate
        }
      );
      

      const booking = response.data.booking;
      const bookingId = booking._id;

      console.log("Booking request status:", response.status);
      console.log("Booking request response:", booking);

      setForm({
        name: "",
        number: "",
        email: "",
      });

      setTimeout(async () => {
        console.log("Fetching payment URL...");
        const paymentResponse = await axios.get(
          `https://art-studio-api.onrender.com/api/payments/payment-form?currency=UAH&productName[]=photosession&productCount[]=1&bookingId=${bookingId}`
        );

        console.log("Payment request status:", paymentResponse.status);
        console.log("Payment request response:", paymentResponse.data);

        if (paymentResponse.status === 200) {
          window.location.href = `https://art-studio-api.onrender.com/api/payments/payment-form?currency=UAH&productName[]=photosession&productCount[]=1&bookingId=${bookingId}`;
        } else {
          console.error("Error in payment request:", paymentResponse.data);
        }
      }, 1000);
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.5 }}
      className="feedback__content container"
    >
      <div className="box__payment">
        <h1 className="title">Оплата</h1>
        <button className="payment__btn" onClick={closeModal}>
          <IoClose className="feedback__close" />
        </button>
      </div>

      <div className="box__booking">
        <h2 className="payment__subtitle">Бронювання:</h2>
        <p className="payment__text">
          {selectedData?.toLocaleDateString()}{" "}
          {selectedSlot ? `${selectedSlot.start}-${selectedSlot.end}` : ""}
        </p>
      </div>

      <div className="box__line" />

      <div className="feedback__formbox">
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form__inputs">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Ваше ім’я"
              className="form__input form__name"
            />
            <input
              name="number"
              value={form.number}
              onChange={onChange}
              placeholder="Номер телефону"
              className="form__input form__name"
            />
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="E-mail адреса"
              className="form__input form__name"
            />
          </div>

          <div className="box__topay">
            <h2 className="payment__subtitle">До сплати:</h2>
            <p className="payment__text">{selectedPrice} грн</p>
          </div>

          <button type="submit" className="btn btn__booking">
            Сплатити
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default PaymentContent;
