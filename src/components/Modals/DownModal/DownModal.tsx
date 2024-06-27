import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FeedbackProps {
  showFeedback: boolean;
  openModal: () => void;
  closeModal: () => void;
  children: any;
  selectedData: any;
  selectedSlot: any;
}

const Feedback: React.FC<FeedbackProps> = ({
  showFeedback,
  closeModal,
  children,
}) => {
  return (
    <div className=" container">
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closeModal}
            className="feedback__container"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Feedback;
