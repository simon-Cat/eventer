export interface IEvent {
  id: number
  image: string
  title: string
  description: string
  location: string
  createdAt: string
}

export type Events = [] | IEvent[]
