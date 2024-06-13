import React, { useState } from 'react'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import map from '../../images/map.png'
import '../../sass/components/_location.scss'
import { motion } from 'framer-motion'; // Імпортуємо framer-motion
import { transition1 } from '../../transitions/transitions';

const Location = () => {
    const [show, setShow] = useState(false)
    const onShowClick = () => {
        if (show === false) {
            setShow(true)
        } else setShow(false)
    }
  return (
      <div className='location'>
          <div>
            <button onClick={onShowClick} className='location__btn title'>Місцезнаходження {show === true ? <SlArrowUp className='location__arrow location__arrow--down'/> : <SlArrowDown className='location__arrow location__arrow--down'/>}</button>
          {show && <motion.div
              initial={{ scale: 0}}
              animate={{ scale: 1}}
              exit={{ scale: 0}}
              transition={transition1}
              className='location__img--box'><img src={map} alt='map' className='location__img' /></motion.div>}
          </div>
          
    </div>
  )
}

export default Location
