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
      
        <button onClick={onShowClick} className="location__btn title ">
          Місцезнаходження{" "}
          {show ? (
            <SlArrowUp className="location__arrow location__arrow--down" />
          ) : (
            <SlArrowDown className="location__arrow location__arrow--down" />
          )}
        </button>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.5219867974047!2d35.073501199999995!3d48.5040575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d959826027371b%3A0x4008234a3659c56b!2z0KTQvtGC0L7RgdGC0YPQtNGW0Y8gRm90b3ggU3R1ZGlv!5e0!3m2!1sru!2sua!4v1718385080169!5m2!1sru!2sua"
                width="290"
                height="250"
                style={{ border: "solid 1px #C2B5A4", borderRadius: "8px", marginBottom: "5px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          )}
        </AnimatePresence>
     
    </div>
  );
};

export default Location;
