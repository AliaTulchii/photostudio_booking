import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../sass/components/_notification.scss";
import { IoClose } from "react-icons/io5";
import { transition1 } from "../../transitions/transitions";
import axios from "axios";

interface FeedbackContentProps {
  closeModal: () => void;
}

const FeedbackContent: React.FC<FeedbackContentProps> = ({ closeModal }) => {
  const [form, setForm] = useState({
    name: "",
    feedback: "",
  });

  const [showNotification, setShowNotification] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const showData = async () => {
    console.log("Form:", form);

    try {
      const response = await axios.post("https://art-studio-tg-admin-bot-production.up.railway.app/send-message", {
        message: `Відгук від\n${form.name}:\n${form.feedback}`
      });

      console.log("Response:", response);
      setForm({
        name: "",
        feedback:""
      })
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 1000);
    } catch (error) {
      console.error("Error sending feedback:", error);
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
      <button className="feedback__btn" onClick={closeModal}>
        <IoClose className="feedback__close" />
      </button>
      <div className="feedback__formbox">
        <form
          action=""
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            showData();
          }}
        >
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

          
          <button
            type="submit"
            className="btn btn__booking btn__form">
            Надіслати відгук
          </button>
        </form>
      </div>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition1}
          style={{ overflow: "hidden" }}
          className="notification"
        >
          <p className="notification__text">Дякуємо за відгук!</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FeedbackContent;
