import {useState, useEffect} from 'react'
import getUserProfile from '../../utilities/profile-api'

export default function HomePage({profile}) {
 

  return (
   <h1>Hello {profile.name} This is the home page</h1>
  )
}