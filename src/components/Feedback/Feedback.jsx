import { useState } from "react";
import Button from "../Button/Button";
import DownModal from "../Modals/DownModal/DownModal";
import FeedbackContent from "./FeedbackContent";

const Feedback = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const openModal = () => {
    setShowFeedback(true);
  };

  const closeModal = () => {
    setShowFeedback(false);
  };

  return (
    <div className="start__downmodal">
      <Button
        type="button"
        className={"btn btn__feedback"}
        text={"Залишити відгук"}
        onClick={openModal}
      />
      <DownModal
        showFeedback={showFeedback}
        openModal={openModal}
        closeModal={closeModal}
      >
        <FeedbackContent closeModal={closeModal} />
      </DownModal>
    </div>
  );
};

export default Feedback;
