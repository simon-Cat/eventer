import Style from './Popup.module.css'
import EventEditingPopup from './EventEditingPopup/EventEditingPopup'
import { useDispatch } from 'react-redux'
import { closeAllPopups } from '@/redux/slices/popupSlice'

export default function Popup({
  title,
  variant
}: {
  title: string,
  variant: string
}) {
  const dispatch = useDispatch()
  const closePopup = () => {
    dispatch(closeAllPopups())
  }
  return (
    <div className={`${Style.popupOverlay} ${title && variant ? '' : Style.popupOverlay_hidden}`}>
      <button onClick={closePopup}>Close popup</button>
      <div className={Style.popupContainer}>
        <h2 className={Style.popupContainer__title}>{title}</h2>
        {variant === 'event_edit' && <EventEditingPopup />}
      </div>
    </div>
  )
}
