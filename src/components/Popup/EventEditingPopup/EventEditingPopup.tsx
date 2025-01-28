import CustomForm from '@/components/CustomForm/CustomForm'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function EventEditingPopup() {
  const { updatedEvent } = useSelector((state: RootState) => state.events)
  return (
    <div>
      {updatedEvent && <CustomForm eventData={updatedEvent} />}
    </div>
  )
}
