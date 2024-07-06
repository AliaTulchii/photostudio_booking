import '../sass/components/_start.scss'
import '../sass/components/_slot.scss'
import Location from '../components/Location/Location'
import Booking from '../components/Booking/Booking'
import RulesOffers from '../components/RulesOffers/RulesOffers'
import Feedback from '../components/Feedback/Feedback'



const Start= () => {


    return (
      <div className='start container'>
        <h1 className='start__title title container'>Бронювання</h1>
        <Booking/>        
        <Location />
        <RulesOffers />
        <Feedback/>        
        </div>
  )
}

export default Start
