import Style from './EventCard.module.css'
import { IEvent } from '@/types/types'

export default function EventCard({
  image,
  title,
  description,
  location,
  createdAt,
}: IEvent) {
  const getFormattedEventDate = () => {
    const eventDate = new Date(JSON.parse(createdAt))
    return eventDate.toLocaleString('ru-Ru', { timeZone: 'UTC' }).split(', ')[0]
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
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  )
}
