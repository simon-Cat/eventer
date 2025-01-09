import Style from '@/app/components/EventCardList/EventCardList.module.css'
import EventCard from '@/app/components/EventCardList/EventCard/EventCard'
import { IEventListProps } from '@/app/types/types'

export default function EventCardList({ events }: IEventListProps) {
  return (
    <div className={Style.eventList}>
      {events.length >= 1 && (
        <div>
          {events.map((event, index) => (
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
