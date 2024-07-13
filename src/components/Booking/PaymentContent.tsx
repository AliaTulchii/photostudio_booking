import React from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import "../../sass/components/_payment.scss";
import axios from "axios";
import { format } from "date-fns";
import { toDate } from "date-fns-tz";
import { useFormik } from "formik";
import * as Yup from "yup";

interface PaymentContentProps {
  closeModal: () => void;
  selectedData: Date | null;
  selectedSlot: { start: string; end: string } | null;
  selectedPrice: number;
  selectedHours: number;
}

const PaymentContent: React.FC<PaymentContentProps> = ({
  selectedData,
  selectedSlot,
  selectedPrice,
  selectedHours,
  closeModal,
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Введіть ваше ім’я"),
      number: Yup.string()
        .matches(/^\+380\d{9}$/, "Номер телефону повинен містити 13 цифр і починатись +380")
        .required("Введіть номер телефону"),
      email: Yup.string().email("Неправильний формат e-mail").required("Введіть e-mail адресу"),
    }),
    onSubmit: async (values) => {
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
        console.log("Form data:", values);
        console.log("Selected data:", selectedData);
        console.log("Selected slot:", selectedSlot);
        console.log("Selected price:", selectedPrice);

        const response = await axios.post(
          `https://art-studio-api-production.up.railway.app/api/bookings/book?price=${selectedPrice}`,
          {
            name: values.name,
            number: values.number,
            email: values.email,
            bookingDate,
            bookingHours: selectedHours.toString(),
            productPrice: selectedPrice
          }
        );
        console.log(response);

        const booking = response.data.booking;
        const bookingId = booking._id;

        console.log("Booking request status:", response.status);
        console.log("Booking request response:", booking);

        setTimeout(async () => {
          console.log("Fetching payment URL...");
          const paymentResponse = await axios.get(
            `https://art-studio-api-production.up.railway.app/api/payments/payment-form?currency=UAH&productName[]=photosession&productCount[]=1&bookingId=${bookingId}`
          );

          console.log("Payment request status:", paymentResponse.status);
          console.log("Payment request response:", paymentResponse.data);

          if (paymentResponse.status === 200) {
            window.location.href = `https://art-studio-api-production.up.railway.app/api/payments/payment-form?currency=UAH&productName[]=photosession&productCount[]=1&bookingId=${bookingId}`;
          } else {
            console.error("Error in payment request:", paymentResponse.data);
          }
        }, 1000);
      } catch (error) {
        console.error("Error submitting the form", error);
      }
    },
  });

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
        <form action="" className="form" onSubmit={formik.handleSubmit}>
          <div className="form__inputs">
            <input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Ваше ім’я"
              className="form__input form__name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="form__error">{formik.errors.name}</div>
            ) : null}
            <input
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Номер телефону"
              className="form__input form__name"
            />
            {formik.touched.number && formik.errors.number ? (
              <div className="form__error">{formik.errors.number}</div>
            ) : null}
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="E-mail адреса"
              className="form__input form__name"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="form__error">{formik.errors.email}</div>
            ) : null}
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