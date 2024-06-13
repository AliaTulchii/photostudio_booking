import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import '../../sass/components/_payment.scss'

interface PaymentContentProps {
  closeModal: () => void;
  selectedData: any;
  selectedSlot: any;
}

const PaymentContent: React.FC<PaymentContentProps> = ({selectedData,selectedSlot, closeModal }) => {
    const [form, setName] = useState({
        name: '',
      number: '',
        email: '',
    });
    
    const onChange = (e: any) => {
        const {value, name,  number, email} = e.target

        setName((state) => ({
            ...state,
          [name]: value,
            [number]: number,
            [email]: email,
        }))
    }

    const showData = () => {
        console.log("Form:", form)
    }

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      className="feedback__content container"
    >
      <div className="box__payment">
        <h1 className="title">Оплата</h1>
        <button className="payment__btn" onClick={closeModal}>
      <IoClose className="feedback__close"/>
      </button>
      </div>

     
      
      <div className="box__booking">
      <h2 className="payment__subtitle">
      Бронювання:
      </h2>
      <p className="payment__text">{selectedData?.toLocaleDateString()} {selectedSlot ? `${selectedSlot.start}-${selectedSlot.end}` : ''}</p>
      </div>
      
      <div className="box__line"/>


      <div className="feedback__formbox">
        <form  action="" className="form">
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

          <div className="box_topay">
          <h2 className="payment__subtitle">
      До сплати:
            </h2>
            <p className="payment__text">0000.00</p>

          </div>

          <Button
            type="submit"
            text="Сплатити"
            onClick={showData}
            className="btn btn__booking"
          />
        </form>
      </div>
    </motion.div>
  );
};

export default PaymentContent;
