import React from 'react'
import '../../sass/components/_button.scss'
type SlotProps = {
  text: string;
  onClick: () => void;
  className: string;
}

const Slot = ({ text,  onClick, className}: SlotProps) => {

  return (
      <button  type='button' className={className} onClick={onClick}>      
      {text}
    </button>
  )
}

export default Slot