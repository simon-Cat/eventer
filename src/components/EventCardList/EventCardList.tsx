import Style from './EventCardList.module.css'
import EventCard from '@/components/EventCardList/EventCard/EventCard'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { IEvent } from '@/types/types'

export default function EventCardList() {
  const { events } = useSelector((state: RootState) => state.events)

  return (
    <div className={Style.eventList}>
      {events.length >= 1 && (
        <div>
          {events.map((event: IEvent, index: number) => (
            <EventCard
              id={event.id}
              image={event.image}
              title={event.title}
              description={event.description}
              location={event.location}
              createdAt={event.createdAt}
              key={index}
            />
          ))}
        </div>
      )}
      {events.length === 0 && <div>No events</div>}
    </div>
  )
}
