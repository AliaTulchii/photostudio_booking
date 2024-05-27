import React from 'react'
import '../../sass/components/_button.scss'
type Btn = {
  text: string;
  onClick: () => void;
}

const Button = ({ text,  onClick }: Btn) => {

  return (
      <button  type='button' className={'btn'} onClick={onClick}>      
      {text}
    </button>
  )
}

export default Button