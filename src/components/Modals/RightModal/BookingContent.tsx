import '../../../sass/components/_modal.scss'
import '../../../sass/components/_title.scss'
import '../../../sass/components/_leftmodal.scss'

const BookingContent = () => {
  return (
    <div className=' modal__container'>
        <h1 className='modal__title title'>Договір публічної оферти</h1>
        <ul className='modal__list'>
              <li className='modal__item'>
              <h2 className='modal__subtitle subtitle'>Загальні положення</h2>
                    
        </li>

              <li className='modal__item'>
              <h2 className='modal__subtitle subtitle'>Предмет договору</h2>
                
        </li>

              <li className='modal__item'>
              <h2 className='modal__subtitle subtitle'>Умови надання послуг</h2>
                  
        </li>

              <li className='modal__item'>
              <h2 className='modal__subtitle subtitle'>Вартість послуг та оплата</h2>
                  
              </li>
              

              <li className='modal__item'>
              <h2 className='modal__subtitle subtitle'>Відповідальність сторін</h2>
                  
        </li>

              <li className='modal__item'>
              <span className='modal__subtitle subtitle'>Заключні положення</span>
                  
        </li>

      </ul>
    </div>
  )
}

export default BookingContent
