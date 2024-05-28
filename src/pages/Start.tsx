import { useState }from 'react'
import '../sass/components/_start.scss'
import Button from '../components/Button/Button'
import Location from '../components/Location/Location'
import BaseModalWrapper from '../components/Modals/BaseModalWrapper'
// import BaseModalWrapper from '../components/Modals/'

const Start = () => {
    // const [isModalVisible, setIsModalVisible] = useState(false)
    const [showModalRules, setShowModalRules] = useState(false)
    const [showModalOffer, setShowModalOffer] = useState(false)


  
    const openModalRules = () => {
        setShowModalRules(true);
      };
    
      const openModalOffer = () => {
        setShowModalOffer(true);
      };
    
      const closeModal = () => {
        setShowModalRules(false);
        setShowModalOffer(false);
      };


    return (
      <div className='start container'>
          <h1 className='start__title title'>Бронювання</h1>
          <ul className='start__list'>
              <li className='start__item'>
                  <Button className={'btn btn__booking'} text={'1 година  - 1000 грн'} onClick={() => {}}/>
              </li>
              <li className='start__item'>
                  <Button className={'btn btn__booking'} text={'2 година  - 1600 грн'} onClick={() => {}}/>
              </li>
              <li className='start__item'>
                  <Button className={'btn btn__booking'} text={'3 година  - 2400 грн'} onClick={() => {}}/>
              </li>
              <li className='start__item'>
                  <Button className={'btn btn__booking'} text={'4 година  - 3200 грн'} onClick={() => {}}/>
              </li>
              <li className='start__item'>
                  <Button className={'btn btn__booking'} text={'5 година  - 4000 грн'} onClick={() => {}}/>
              </li>
          </ul>
          
          <div className='start__location'>              
              <Location/>
          </div>

          <div className='start__modals'>
              <Button  className={'btn__modal title'} text={'Правила студії'} onClick={openModalRules}/>
              <Button className={'btn__modal title'} text={'Договір публічної оферти'} onClick={openModalOffer}/>
                <BaseModalWrapper isOpen={showModalRules || showModalOffer} showModalRules={showModalRules} showModalOffer= {showModalOffer} onBackdropClick={() => closeModal()}/>
          </div>
          
        </div>
  )
}

export default Start
