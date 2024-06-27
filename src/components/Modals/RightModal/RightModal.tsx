import React from 'react'
import { AnimatePresence, motion, useDragControls, useMotionValue } from 'framer-motion'; 
import BookingContent from '../../Booking/BookingContent';
import { transition1 } from '../../../transitions/transitions';
import '../../../sass/components/_modal.scss'


interface BookingProps  {
    showBooked: boolean;
  closeModal: () => void;
  selectedHours: number ;
  selectedPrice: number;
}

const RightModal: React.FC<BookingProps> = ({showBooked,  closeModal, selectedHours, selectedPrice}) => {
    const controls = useDragControls()
    const x = useMotionValue(0)
  
    return (
        <div className='rightmodal container'>
            <AnimatePresence>
              {showBooked && <motion.div
              className='modal__overlay'
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={transition1}
              drag="x"
              dragControls={controls}
              dragConstraints={{ right: 0 }}
              dragElastic={{ right: 1 }}
              style={{ x }}
              onDragEnd={() => {
                if (x.get() > 150) {
                  closeModal();
                }
              }}
          >
            
            <BookingContent selectedHours={selectedHours} selectedPrice={selectedPrice} closeModal={closeModal} />
          </motion.div>}
            </AnimatePresence>
         
    </div>
  )
}

export default RightModal