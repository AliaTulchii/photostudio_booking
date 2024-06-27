import {
  AnimatePresence,
  motion,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import React from "react";
import Rules from "../../RulesOffers/Rules";
import { transition1 } from "../../../transitions/transitions";
import PublicOffer from "../../RulesOffers/PublicOffer";
import "../../../sass/components/_modal.scss";

interface ModalProps {
  showModalRules: boolean;
  showModalOffer: boolean;
  onBackdropClick: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({
  showModalRules,
  showModalOffer,
  onBackdropClick,
  isOpen,
}) => {
  const controls = useDragControls();
  const x = useMotionValue(0);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="modal__overlay"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={transition1}
          drag="x"
          dragControls={controls}
          dragConstraints={{ left: 0 }}
          dragElastic={{ left: 1 }}
          style={{ x }}
          onDragEnd={() => {
            if (x.get() <= -150) {
              onBackdropClick();
            }
          }}
          onClick={onBackdropClick}
        >
          {showModalRules && <Rules onBackdropClick={onBackdropClick} />}

          {showModalOffer && <PublicOffer onBackdropClick={onBackdropClick} />}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
