'use client'
import CustomForm from '@/components/CustomForm/CustomForm'
import EventCardList from '@/components/EventCardList/EventCardList'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <main>
          <CustomForm />
          <EventCardList />
        </main>
      </Provider>
    </>
  )
}
