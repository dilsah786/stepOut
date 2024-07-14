import React, { useContext } from 'react'
import { AuthContext } from '../Context/authContext'


const HomePage = () => {

    const {token} = useContext(AuthContext)

    console.log(token);

  return (
    <div>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
      <h1>Hello Irctct Booking app</h1>
    </div>
  )
}

export default HomePage