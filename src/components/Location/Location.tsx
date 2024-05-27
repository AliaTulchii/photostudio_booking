import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import map from '../../images/map.png'
import '../../sass/components/_location.scss'

const Location = () => {
    const [show, setShow] = useState(false)
    const onShowClick = () => {
        if (show === false) {
            setShow(true)
        } else setShow(false)
    }
  return (
      <div>
          <div>
              
          </div>
          <button onClick={onShowClick} className='location__btn title'>Місцезнаходження <SlArrowDown className='location__arrow location__arrow--down'/></button>
          {show && <div className='location__img--box'><img src={map} alt='map' className='location__img'/></div> }
    </div>
  )
}

export default Location
