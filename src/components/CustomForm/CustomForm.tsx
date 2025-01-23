import Style from './CustomForm.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IEvent } from '@/types/types'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addEvent } from '@/redux/slices/eventsSlice'

export default function CustomForm() {
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

    dispatch(addEvent(eventData))
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className={Style.form}
    >
      <input
        type="url"
        {...register('image', { required: true })}
      />
      {errors.image && <span className={Style.error}>Required insert image URL</span>}

      <input
        type="text"
        {...register('title', { required: true })}
      />
      {errors.title && <span className={Style.error}>Required insert title</span>}

      <textarea
        {...register('description', { required: true })}
      />
      {errors.description && <span className={Style.error}>Required insert description</span>}

      <input
        type="text"
        {...register('location', { required: true })}
      />
      {errors.location && <span className={Style.error}>Required insert location</span>}

      <button type="submit">Создать</button>
    </form>
  )
}
