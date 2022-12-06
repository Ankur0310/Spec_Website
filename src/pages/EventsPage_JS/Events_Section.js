import React from 'react'
import Events_Navbar from './Events_Navbar'
import {useParams} from 'react-router-dom'

function Events_Section() {
    const {id} = useParams();
  return (
    <div>
        {/* <p style={backgroundColor={{props.name? "red":"blue"}}}>Nikalo</p> */}
        <h1>{id}</h1>
    </div>
  )
}

export default Events_Section