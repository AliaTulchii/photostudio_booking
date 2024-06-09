import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'; 
import FeedbackContent from './FeedbackContent';

interface FeedbackProps  {
    showFeedback: boolean;
    openModalFeedback: () => void;
    closeModal: () => void;
}

const Feedback: React.FC<FeedbackProps> = ({showFeedback,  closeModal}) => {
   
  
    return (
        <div className='feedbackmodal__container container'>
            <AnimatePresence>
                 {showFeedback && <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={closeModal}
              
          className='feedback__container'
          ><FeedbackContent closeModal={closeModal} /></motion.div>}
            </AnimatePresence>
         
    </div>
  )
}

export default Feedback
