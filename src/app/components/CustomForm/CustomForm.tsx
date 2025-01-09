import Style from '@/app/components/CustomForm/CustomForm.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IFormProps, IEvent } from '@/app/types/types'
import { useEffect } from 'react'

export default function CustomForm({ submitHandler }: IFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IEvent>()

  const submitForm: SubmitHandler<IEvent> = (formData) => {
    const createdDate = new Date()
    const randomId = Math.random() * 100
    const eventData: IEvent = { ...formData, createdAt: createdDate, id: randomId }
    submitHandler(eventData)
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
      {errors.title && <span className={Style.error}>Required insert event's title</span>}

      <textarea
        {...register('description', { required: true })}
      />
      {errors.description && <span className={Style.error}>Required insert event's description</span>}

      <input
        type="text"
        {...register('location', { required: true })}
      />
      {errors.location && <span className={Style.error}>Required insert event's location</span>}

      <button type="submit">Создать</button>
    </form>
  )
}
