import React from 'react'
import { sendFormData } from '../services/sendFormData'
import './FormBookingMeetingRoom.css'

const FormBookingMeetingRoom = () => {
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0]

  const [startTime, setStartTime] = React.useState('')

  const handleFormSubmit = event => {
    event.preventDefault()
    const form = document.getElementById('meeting-room-booking-form')
    const formData = new FormData(form)

    sendFormData(formData)

    form.reset()
  }

  return (
    <form
      id='meeting-room-booking-form'
      className='meeting-room-booking-form '
      onSubmit={handleFormSubmit}
    >
      <div className='meeting-room-booking-form--component'>
        <label htmlFor='tower'> башня</label>
        <select name='tower' defaultValue='tower_a'>
          <option value='tower_a'>Башня А</option>
          <option value='tower_b'>Башня Б</option>
        </select>
      </div>

      <div className='meeting-room-booking-form--component'>
        <label htmlFor='floor'> этаж (с 3 по 27)</label>
        <input
          required={true}
          type='number'
          name='floor'
          id=''
          min={3}
          max={27}
        />
      </div>

      <div className='meeting-room-booking-form--component'>
        <label htmlFor='room'> комната (с 1 по 10)</label>
        <input
          required={true}
          type='number'
          name='room'
          id=''
          min={1}
          max={10}
        />
      </div>

      <div className='meeting-room-booking-form--component'>
        <label htmlFor='date'> дата</label>
        <input type='date' name='date' min={tomorrow} required={true} />
      </div>

      <div className='meeting-room-booking-form--component'>
        <label htmlFor='time-start'> время начала</label>
        <div>
          <input
            type='time'
            name='time-start'
            required={true}
            onInput={e => setStartTime(e.target.value)}
          />
        </div>
      </div>
      <div className='meeting-room-booking-form--component'>
        <label htmlFor='time-end'> время окончания</label>
        <div>
          <input type='time' name='time-end' min={startTime} required={true} />
        </div>
      </div>

      <div className='meeting-room-booking-form--component'>
        <label htmlFor='room'> комментарий </label>
        <textarea name='comment' rows={3} maxLength={100} />
      </div>

      <div className='form--controls'>
        <button type='reset' className='btn btn--reset' children='reset' />
        <button type='submit' className='btn btn--submit' children='submit' />
      </div>
    </form>
  )
}

export default FormBookingMeetingRoom
