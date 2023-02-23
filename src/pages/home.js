import React from 'react'
import Info from '../components/info'
import Landing from '../components/landing'
import Program from '../components/program'
import Rsvp from '../components/rsvp'
import { useGuest } from '../context/guestContext'

function Home() {

    const { dispatch, state: { guest } } = useGuest();

    console.log("guest", guest)
  return (
    <div>
        <Landing/>
        <Info/>
        <Rsvp/>
        <Program/>
    </div>
  )
}

export default Home