import React, { useState } from 'react'
import Button from '../Button/Button'
import RightModal from '../Modals/RightModal/RightModal'

const Booking = () => {
    const [showBooked, setShowBooked] = useState(false)

    const openModalBooked = () => {
        setShowBooked(true)
    };
    
    const closeModal = () => {
        setShowBooked(false)
      };
  return (
    <div>
      
      <ul className='start__list'>
              <li className='start__item'>
                  <Button type='button' className={'btn btn__booking'} text={'1 година  - 1000 грн'} onClick={openModalBooked}/>
              </li>
              <li className='start__item'>
                  <Button type='button' className={'btn btn__booking'} text={'2 година  - 1600 грн'} onClick={openModalBooked}/>
              </li>
              <li className='start__item'>
                  <Button type='button' className={'btn btn__booking'} text={'3 година  - 2400 грн'} onClick={openModalBooked}/>
              </li>
              <li className='start__item'>
                  <Button type='button' className={'btn btn__booking'} text={'4 година  - 3200 грн'} onClick={openModalBooked}/>
              </li>
              <li className='start__item'>
                  <Button type='button' className={'btn btn__booking'} text={'5 година  - 4000 грн'} onClick={openModalBooked}/>
              </li>
        </ul>
        <RightModal showBooked={showBooked}  closeModal={closeModal} />
    </div>
  )
}

export default Booking
