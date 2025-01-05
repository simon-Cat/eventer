import Style from '@/app/components/EventCard/EventCard.module.css'
import { IEvent } from '@/app/types/types'

export default function EventCard({
  image,
  title,
  description,
  location,
  createdAt,
}: IEvent) {
  const creationDate = createdAt
    .toLocaleString('ru-Ru', { timeZone: 'UTC' })
    .split(', ')[0]
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
      <p>Created at: {creationDate}</p>
      <div style={{ display: 'flex', gap: '5px' }}>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  )
}
