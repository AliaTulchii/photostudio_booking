import React from 'react'
import { AnimatePresence, motion, useDragControls, useMotionValue } from 'framer-motion'; 
import BookingContent from './BookingContent';
import { transition1 } from '../../../transitions/transitions';

interface BookingProps  {
    showBooked: boolean;
    closeModal: () => void;
}

const Feedback: React.FC<BookingProps> = ({showBooked,  closeModal}) => {
    const controls = useDragControls()
    const x = useMotionValue(0)
  
    return (
        <div className='feedbackmodal__container container'>
            <AnimatePresence>
                 {showBooked && <motion.div
              className='modal__overlay'
              initial={{  x: '100%' }}
              animate={{  x: '0%' }}
                transition={transition1}
                drag="x"
                dragControls={controls}
                dragConstraints={{
                  top: 0,
                  left:0,
                }}
                dragElastic={{
                  top: 0,
                  left:1,
                }}
                style={{ x }}
                
    onDragEnd={() => {
      if (x.get() >= 150) {
        closeModal()
      }
      
    }}
    onClick={closeModal}
                ><BookingContent/></motion.div>}
            </AnimatePresence>
         
    </div>
  )
}

export default Feedback