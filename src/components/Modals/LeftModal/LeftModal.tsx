import { motion,useDragControls, useMotionValue } from 'framer-motion';
import React from 'react'
import Rules from './Rules';
import { transition1 } from '../../../transitions/transitions';
import PublicOffer from './PublicOffer';
import '../../../sass/components/_modal.scss'



interface ModalProps {
  showModalRules: boolean;
  showModalOffer: boolean;
  onBackdropClick: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ showModalRules, showModalOffer, onBackdropClick,isOpen}) => {
  const controls = useDragControls()
  const x = useMotionValue(0)
  return isOpen ? (
    <motion.div
    className='modal__overlay'
                initial={{  x: '-100%' }}
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
          onBackdropClick()
        }
        
      }}
      onClick={onBackdropClick}
    >
      {showModalRules && <Rules />}

      {showModalOffer && <PublicOffer />}
    </motion.div>
  ) : null
}

export default Modal


// <motion.div
//               className='modal__overlay'
//             initial={{  x: '-100%' }}
//             animate={{  x: '0%' }}
//               transition={transition1}
//               drag="x"
//               dragControls={controls}
//               dragConstraints={{
//                 top: 0,
//                 left:0,
//               }}
//               dragElastic={{
//                 top: 0,
//                 left:1,
//               }}
//               style={{ x }}
//               onDragEnd={() => {
//                 if (x.get() <= -50) {
//                   closeModal()
//                 }
//               }
//               }
//               onClick={closeModal}
//             ><PublicOffer /></motion.div>
