import Style from './EventCard.module.css'
import { IEvent } from '@/types/types'
import { deleteEvent } from '@/redux/slices/eventsSlice'
import { useDispatch } from 'react-redux'

export default function EventCard({ eventData }: {eventData :IEvent}) {
  const dispatch = useDispatch()
  const getFormattedEventDate = () => {
    const eventDate = new Date(JSON.parse(eventData.createdAt))
    return eventDate.toLocaleString('ru-Ru', { timeZone: 'UTC' }).split(', ')[0]
  }
  const handleDeleteEvent = () => {
    dispatch(deleteEvent(eventData.id))
  }

  return (
    <div className={Style.card}>
      <img
        className={Style.image}
        src={eventData.image}
        alt={`Image of ${eventData.title} event`}
      />
      <h2>{eventData.title}</h2>
      <p>{eventData.description}</p>
      <p>Location: {eventData.location}</p>
      <p>Created at: {getFormattedEventDate()}</p>
      <div className={Style.buttons}>
        <button onClick={handleDeleteEvent}>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  )
}
