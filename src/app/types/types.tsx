export interface IEvent {
  id: number
  image: string
  title: string
  description: string
  location: string
  createdAt: Date
}

export type Events = [] | IEvent[]

export interface IEventListProps {
  events: Events
}

export interface IFormProps {
  submitHandler(arg: IEvent): void
}

