import React from 'react';
import ReactDOM from 'react-dom';
import { motion, useDragControls, useMotionValue } from 'framer-motion'; 
import { transition1 } from '../../transitions/transitions';
interface ModalProps {
  onBackdropClick: () => void;
  isOpen: boolean;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ onBackdropClick,isOpen, children }) => {
  const controls = useDragControls()
  const x = useMotionValue(0)

  return isOpen ? (ReactDOM.createPortal(
    <motion.div
      className='modal__overlay'
      initial={{  x: '-100%' }}
    animate={{  x: '0%' }}
    // exit={{ opacity: 0, x: '-50%' }}
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
        if (x.get() >= 10) {
          onBackdropClick()
        }}
      }
      onClick={onBackdropClick}
    >
      {children}
    </motion.div>,
    document.getElementById('modal-root')!)
  ) : null;
}

export default Modal;
