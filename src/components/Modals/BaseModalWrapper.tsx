import React from 'react';
import Modal from './Modal';
import Rules from './Modal/Rules';
import PublicOffer from './Modal/PublicOffer';
import { motion, useDragControls, useMotionValue } from 'framer-motion'; 
import { transition1 } from '../../transitions/transitions';

interface BaseModalWrapperProps {
  showModalRules: boolean;
  showModalOffer: boolean;
  onBackdropClick: () => void;
  isOpen: boolean;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({ onBackdropClick, showModalRules, showModalOffer, isOpen }) => {
  
  const controls = useDragControls()
  const x = useMotionValue(0)
  
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: '0%' }}
      // exit={{ opacity: 0, x: '-50%' }}
      transition={transition1}
      drag="x"
      dragControls={controls}
      dragConstraints={{
        top: 0,
        left: 0,
      }}
      dragElastic={{
        top: 0,
        left: 1,
      }}
      style={{ x }}
      onDragEnd={() => {
        if (x.get() >= 100) {
          onBackdropClick()
        }
      }}
      // initial={{ opacity: 0, y: '100vh' }}
      // animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : '100vh' }}
      // transition={{ duration: 0.4 }}
    >
      {showModalRules && (
        <Modal isOpen={showModalRules} onBackdropClick={onBackdropClick}>
          <Rules />
        </Modal>
      )}

      {showModalOffer && (
        <Modal isOpen={showModalOffer} onBackdropClick={onBackdropClick}>
          <PublicOffer />
        </Modal>
      )}
    </motion.div>
  );
}

export default BaseModalWrapper;
