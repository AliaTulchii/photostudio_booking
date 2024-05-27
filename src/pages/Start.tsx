import React from 'react'
import '../sass/components/_start.scss'
import Button from '../components/Button/Button'
import Location from '../components/Location/Location'

const Start = () => {
  return (
      <div className='start container'>
          <h1 className='start__title title'>Бронювання</h1>
          <ul className='start__list'>
              <li className='start__item'>
                  <Button text={'1 година  - 1000 грн'} onClick={() => {}}/>
              </li>
              <li className='start__item'>
                  <Button text={'2 година  - 1600 грн'} onClick={() => {}}/>
              </li>
              <li className='start__item'>
                  <Button text={'3 година  - 2400 грн'} onClick={() => {}}/>
              </li>
              <li className='start__item'>
                  <Button text={'4 година  - 3200 грн'} onClick={() => {}}/>
              </li>
              <li className='start__item'>
                  <Button text={'5 година  - 4000 грн'} onClick={() => {}}/>
              </li>
          </ul>
          
          <div className='start__location'>
              
              <Location/>
          </div>
          
    </div>
  )
}

export default Start
