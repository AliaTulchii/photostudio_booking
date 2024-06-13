import React, { useState } from 'react'
import Button from '../Button/Button'
import LeftModal from '../Modals/LeftModal/LeftModal'
import '../../sass/components/_leftmodal.scss'


const RulesOffers = () => {
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
    <div className='leftmodals'>
        <Button type='button'  className={'btn__modal title'} text={'Правила студії'} onClick={openModalRules}/>
              <Button type='button' className={'btn__modal title'} text={'Договір публічної оферти'} onClick={openModalOffer}/>
          <LeftModal isOpen={showModalRules || showModalOffer} showModalRules={showModalRules} showModalOffer= {showModalOffer} onBackdropClick={() => closeModal()}/>
          </div>
  )
}

export default RulesOffers
