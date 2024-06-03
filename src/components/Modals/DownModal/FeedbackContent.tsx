import React from "react";
import { motion } from "framer-motion";
import Button from "../../Button/Button";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface FeedbackContentProps {
  closeModal: () => void;
}

const FeedbackContent: React.FC<FeedbackContentProps> = ({ closeModal }) => {
    const [name, setName] = useState("");
    
    const onChange = (e: any) => {
        const {value} = e.target

        setName(value)
    }

    const showData = () => {
        console.log("name:", name)
    }

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      className="feedback__content"
    >
      <button className="feedback__btn" onClick={closeModal}>
      <IoClose className="feedback__close"/>
      </button>
      <div className="feedback__formbox">
        <form action="" className="form">
          <div className="form__inputs">
            <input
                          name="name"
                          value={name}
                          onChange={onChange}
              placeholder="Ваше ім’я"
              className="form__input form__name"
            />
            <input
              type="textarea"
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
