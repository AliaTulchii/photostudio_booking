import { useState }from 'react'
import '../sass/components/_start.scss'
import Button from '../components/Button/Button'
import Location from '../components/Location/Location'
import BaseModalWrapper from '../components/Modals/LeftModal/BaseModalWrapper'
// import FeedbackWraper from '../components/Modals/DownModal/Feedback'
import FeedbackModal from '../components/Modals/DownModal/FeedbackModal'



const Start = () => {
    
    const [showModalRules, setShowModalRules] = useState(false)
  const [showModalOffer, setShowModalOffer] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  // const [showBooked, setShowBooked] = useState(false)
  


  
    const openModalRules = () => {
        setShowModalRules(true);
      };
    
      const openModalOffer = () => {
        setShowModalOffer(true);
  };
  
  const openModalFeedback = () => {
    setShowFeedback(true)
  };

  // const openModalBooked = () => {
  //   setShowBooked(true)
  // };
    
      const closeModal = () => {
        setShowModalRules(false);
        setShowModalOffer(false);
        setShowFeedback(false);
        // setShowBooked(false)
      };


    return (
      <div className='start container'>
          <h1 className='start__title title'>Бронювання</h1>
          <ul className='start__list'>
              <li className='start__item'>
                  <Button type='button' className={'btn btn__booking'} text={'1 година  - 1000 грн'} onClick={() => {}}/>
              </li>
              <li className='start__item'>
                  <Button type='button' className={'btn btn__booking'} text={'2 година  - 1600 грн'} onClick={() => {}}/>
              </li>
              <li className='start__item'>
                  <Button type='button' className={'btn btn__booking'} text={'3 година  - 2400 грн'} onClick={() => {}}/>
              </li>
              <li className='start__item'>
                  <Button type='button' className={'btn btn__booking'} text={'4 година  - 3200 грн'} onClick={() => {}}/>
              </li>
              <li className='start__item'>
                  <Button type='button' className={'btn btn__booking'} text={'5 година  - 4000 грн'} onClick={() => {}}/>
              </li>
          </ul>
          
          <div className='start__location'>              
              <Location/>
          </div>

          <div className='start__modals'>
              <Button type='button'  className={'btn__modal title'} text={'Правила студії'} onClick={openModalRules}/>
              <Button type='button' className={'btn__modal title'} text={'Договір публічної оферти'} onClick={openModalOffer}/>
                <BaseModalWrapper isOpen={showModalRules || showModalOffer} showModalRules={showModalRules} showModalOffer= {showModalOffer} onBackdropClick={() => closeModal()}/>
          </div>
          
        <div>
          <Button type='button' className={'btn btn__feedback'} text={'Завантажити ще'} onClick={ openModalFeedback } />
          <FeedbackModal showFeedback={showFeedback} openModalFeedback={openModalFeedback} closeModal={closeModal} />
        </div>
        
        </div>
  )
}

export default Start
