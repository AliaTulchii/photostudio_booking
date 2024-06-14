import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import '../../sass/components/_notification.scss'
import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface FeedbackContentProps {
  closeModal: () => void;
}

const FeedbackContent: React.FC<FeedbackContentProps> = ({ closeModal }) => {
    const [form, setForm] = useState({
        name: '',
        feedback: '',
    });
    
  const [showNotification, setShowNotification] = useState(false)

    const onChange = (e: any) => {
        const {value, name, feedback} = e.target

        setForm((state) => ({
            ...state,
            [name]: value,
            [feedback]: feedback,
        }))
    }

    const showData = () => {
      console.log("Form:", form)
      setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    }

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.5 }}
      className="feedback__content container"
    >
      <button className="feedback__btn" onClick={closeModal}>
      <IoClose className="feedback__close"/>
      </button>
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
            <textarea
                          name="feedback"
                          value={form.feedback}
                          onChange={onChange}
              placeholder="Ваш відгук"
              className="form__input form__textarea"
            />
          </div>

          <Button
            type="submit"
            text="Надіслати відгук"
            onClick={showData}
            className="btn btn__booking btn__form"
          />
        </form>
      </div>
      {showNotification && (
        <div className="notification">
          <p className="notification__text">Дякуємо за відгук!</p>
        </div>
      )}
    </motion.div>
  );
};

export default FeedbackContent;
