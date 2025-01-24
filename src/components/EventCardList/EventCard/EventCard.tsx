import Style from './EventCard.module.css'
import { IEvent } from '@/types/types'
import { deleteEvent } from '@/redux/slices/eventsSlice'
import { useDispatch } from 'react-redux'

export default function EventCard({
  id,
  image,
  title,
  description,
  location,
  createdAt,
}: IEvent) {
  const dispatch = useDispatch()
  const getFormattedEventDate = () => {
    const eventDate = new Date(JSON.parse(createdAt))
    return eventDate.toLocaleString('ru-Ru', { timeZone: 'UTC' }).split(', ')[0]
  }
  const handleDeleteEvent = () => {
    dispatch(deleteEvent(id))
  }

  return (
    <div className={Style.card}>
      <img
        className={Style.image}
        src={image}
        alt={`Image of ${title} event`}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Location: {location}</p>
      <p>Created at: {getFormattedEventDate()}</p>
      <div className={Style.buttons}>
        <button onClick={handleDeleteEvent}>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  )
}
