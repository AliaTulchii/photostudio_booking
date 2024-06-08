import React from "react";
import { motion } from "framer-motion";
import Button from "../../Button/Button";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface FeedbackContentProps {
  closeModal: () => void;
}

const FeedbackContent: React.FC<FeedbackContentProps> = ({ closeModal }) => {
    const [form, setName] = useState({
        name: '',
        feedback: '',
    });
    
    const onChange = (e: any) => {
        const {value, name, feedback} = e.target

        setName((state) => ({
            ...state,
            [name]: value,
            [feedback]: feedback,
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
    </motion.div>
  );
};

export default FeedbackContent;
