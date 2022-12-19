import {useState, useEffect} from 'react'
import Bird from '../../components/Sprite/Sprite'
import './HomePage.css'

export default function HomePage({profile, size}) {
 

  return (
   <div className='HomePage'
   style={{
    height: size -40
   }}
   >
    <h1>Hello {profile.name} This is the home page</h1>
    <h1>Hello {profile.avatar} This is the home page</h1>
    <h1>Hello {profile.hghScore} This is the home page</h1>
    <h1>Hello {profile.scores} This is the home page</h1>
    <div>
    <Bird profile={profile}/>
    </div>
   </div>
     
    
  )
}