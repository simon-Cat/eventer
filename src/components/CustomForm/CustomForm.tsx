import Style from './CustomForm.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IEvent } from '@/types/types'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addEvent, updateEvent } from '@/redux/slices/eventsSlice'
import { closeAllPopups } from '@/redux/slices/popupSlice'

export default function CustomForm({eventData}: {eventData?: IEvent}) {
  const dispatch = useDispatch()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IEvent>()

  const submitForm: SubmitHandler<IEvent> = (formData) => {
    const createdDate = JSON.stringify(new Date())
    const randomId = +(Math.random() * 100).toFixed()
    const eventData: IEvent = { ...formData, createdAt: createdDate, id: randomId }

    dispatch(closeAllPopups())
    dispatch(addEvent(eventData))
  }

  const submitFormEdit: SubmitHandler<IEvent> = (newEventData) => {
    if(eventData) {
      const updateDate = JSON.stringify(new Date())
      
      dispatch(closeAllPopups())
      dispatch(updateEvent({
        ...newEventData,
        id: eventData.id,
        createdAt: eventData.createdAt,
        updateAt: updateDate
      }))
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <form
      onSubmit={handleSubmit(eventData ? submitFormEdit : submitForm)}
      className={Style.form}
    >
      <input
        type="url"
        defaultValue={eventData ? eventData.image : ''}
        {...register('image', { required: true })}
      />
      {errors.image && <span className={Style.error}>Required insert image URL</span>}

      <input
        type="text"
        defaultValue={eventData ? eventData.title : ''}
        {...register('title', { required: true })}
      />
      {errors.title && <span className={Style.error}>Required insert title</span>}

      <textarea
        defaultValue={eventData ? eventData.description : ''}
        {...register('description', { required: true })}
        
      />
      {errors.description && <span className={Style.error}>Required insert description</span>}

      <input
        type="text"
        defaultValue={eventData ? eventData.location : ''}
        {...register('location', { required: true })}
      />
      {errors.location && <span className={Style.error}>Required insert location</span>}

      <button type="submit">{eventData ? 'Сохранить изменения' : 'Создать'}</button>
    </form>
  )
}
