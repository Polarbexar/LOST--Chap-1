import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import SpriteHome from '../../components/SpriteHome/SpriteHome'
import './HomePage.css'

export default function HomePage({profile, size}) {
  const [xPos, setXPos] = useState(window.innerWidth / 2);
  const [yPos, setYPos] = useState(420);
  const mirror = (xPos - 100)

  useEffect(() => {
    
  })

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
    <SpriteHome 
    profile={profile}
    xPos={xPos}
    setXPos={setXPos}
    yPos={yPos}
    setYPos={setYPos}/>
    <div
    style={{
      left: 50
    }}>
    <Link to="/profilepage"><img src="./assets/mirror.png" alt="mirror-link to profile page" /></Link>
    </div>
    <div>
    </div>
   </div>
     
    
  )
}