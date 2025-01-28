import Style from './EventCardList.module.css'
import EventCard from '@/components/EventCardList/EventCard/EventCard'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { IEvent } from '@/types/types'
import Popup from '@/components/Popup/Popup'

export default function EventCardList() {
  const { events } = useSelector((state: RootState) => state.events)
  const {title, variant} = useSelector((state: RootState) => state.popup.info)

  return (
    <div className={Style.eventList}>
      {events.length >= 1 && (
        <div>
          {events.map((event: IEvent) => (
            <EventCard
              eventData={event}
              key={event.id}
            />
          ))}
        </div>
      )}
      {events.length === 0 && <div>No events</div>}
      <Popup
        title={title}
        variant={variant}
      />
    </div>
  )
}
