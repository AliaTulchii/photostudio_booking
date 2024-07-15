import '../sass/components/_start.scss'
import '../sass/components/_slot.scss'
import Location from '../components/Location/Location'
import Booking from '../components/Booking/Booking'
import RulesOffers from '../components/RulesOffers/RulesOffers'
import Feedback from '../components/Feedback/Feedback'
import logo from '../images/photo.png'
import photolab from '../images/photolab.png'



const Start= () => {


    return (
      <div className='start container'>
        <a href="https://www.instagram.com/focus.photolab/?utm_source=ig_web_button_share_sheet" className='logo'>
          <img src={logo} alt="logo" className='logo__img' />
          <img src={photolab} alt="logo" className='logo__title'/>
        </a>
        <h1 className='start__title title'>Бронювання</h1>
        <Booking/>        
        <Location />
        <RulesOffers />

        <Feedback/>        
        </div>
  )
}

export default Start
