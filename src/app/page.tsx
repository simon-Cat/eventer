'use client'
import { useState } from 'react'
import CustomForm from '@/app/components/CustomForm/CustomForm'
import EventCardList from '@/app/components/EventCardList/EventCardList'
import { IEvent, Events } from '@/app/types/types'

export default function Home() {
  const [events, setEvents] = useState<Events>([])
  const createNewEvent = (newEvent: IEvent): void => {
    const eventsCopy: IEvent[] = events.slice()
    eventsCopy.push(newEvent)
    setEvents(eventsCopy)
  }
  
  return (
    <div>
      <CustomForm submitHandler={createNewEvent} />
      <EventCardList events={events} />
    </div>
  )
}
