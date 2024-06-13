import { format,  endOfMonth, startOfDay, addDays } from 'date-fns';
import { uk } from 'date-fns/locale';
import '../../sass/components/_modal.scss'
import '../../sass/components/_booking.scss'
import '../../sass/components/_leftmodal.scss'
import Button from '../../components/Button/Button'
import { useEffect, useState } from 'react';
import Slot from '../../components/Button/Slot';
import DownModal from '../../components/Modals/DownModal/DownModal'
import PaymentContent from './PaymentContent';

interface TimeSlot {
  start: string;
  end: string;
}

const BookingContent: React.FC = () => {
  const [daysOfMonth, setDaysOfMonth] = useState<Date[]>([]);
  const [availableTimes, setAvailableTimes] = useState<Record<string, TimeSlot[]>>({})
  const [showAllDays, setShowAllDays] = useState<boolean>(false);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)

  const initialDaysToShow = 7; 


  useEffect(() => {
    const currentDate = new Date();
    const startOfToday = startOfDay(currentDate);
    const endOfCurrentMonth = endOfMonth(currentDate);
    const allDays: Date[] = [startOfToday];
    const daysToShow = showAllDays ? endOfCurrentMonth.getDate() : initialDaysToShow;

    const availableTimesObject: Record<string, TimeSlot[]> = {}


    const availableHours: TimeSlot[] = Array.from({ length: 12}, (_, index) => ({
      start: `${9 + index}:00`,
      end: `${10 + index}:00`
    }))

    for (let i = 1; i < daysToShow; i++) {
      allDays.push(addDays(allDays[allDays.length - 1], 1));
      availableTimesObject[format(allDays[i], 'yyyy-MM-dd')] = availableHours;
    }

    setDaysOfMonth(allDays);
    setAvailableTimes(availableTimesObject);
  }, [showAllDays]);

  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleLoadMore = () => {
    setShowAllDays(true);
  };

  const handleBooking = (day: Date, slot: TimeSlot) => {
    setSelectedData(day); 
    setSelectedSlot(slot); 
    setShowFeedback(true); 
  };

  const openModal = () => {
    setShowFeedback(true)
};

  const closeModal = () => {
    setShowFeedback(false);
  };

  return (
    <div className='modal__container'>
      <ul className='modal__list booking__list'>
        {daysOfMonth.map(day => (
          <li key={day.getTime()} className='modal__item'>
            <p className='booking__title'>{capitalizeFirstLetter(format(day, 'EEEE, d MMMM', { locale: uk }))}</p>
            <ul className="slots__list">
              {availableTimes[format(day, 'yyyy-MM-dd')]?.map((slot, index) => (
                <li key={index} >
                  <Slot text={`${slot.start}-${slot.end}`} onClick={() => handleBooking(day, slot)} className='slot'/>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <DownModal
        openModal={openModal}
      showFeedback={showFeedback}
      closeModal={closeModal}
      selectedData={selectedData}
        selectedSlot={selectedSlot}>
        <PaymentContent
          closeModal={closeModal}
          selectedData={selectedData}
        selectedSlot={selectedSlot}/>
      </DownModal>
    
      <Button type='button' className={'btn btn__feedback'} text={'Завантажити ще'} onClick={handleLoadMore} />
    </div>
  )
}

export default BookingContent
