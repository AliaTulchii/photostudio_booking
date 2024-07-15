import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "../../sass/components/_location.scss";
import { AnimatePresence, motion } from "framer-motion"; 
import { transition1 } from "../../transitions/transitions";

const Location = () => {
  const [show, setShow] = useState(false);
  const onShowClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="location">
      <div>
        <div className="location__btnbox" onClick={onShowClick}>
           <button  className="location__btn title ">
          Місцезнаходження
        </button>
          {show ? (
            <SlArrowUp className="location__arrow location__arrow--down" />
          ) : (
            <SlArrowDown className="location__arrow location__arrow--down" />
          )}
        </div>
       
        
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={transition1}
              style={{ overflow: "hidden" }}
              className="location__img--box"
            >
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE,%20%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%A2%D1%80%D0%BE%D1%97%D1%86%D1%8C%D0%BA%D0%B0%2021-%D0%B3+(Focus%20Photolab)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="290"
                height="250"
                style={{ border: "solid 1px #C2B5A4", borderRadius: "8px", marginBottom: "5px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            <p className="modal__text">
            <span className="modal__text--accent">Адреса:</span>
            Дніпро, вулиця Троїцька 21-г, офіс 504
          </p>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Location;
