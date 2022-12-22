import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import HighScoreBoard from '../../components/HighScoreBoard/HighScoreBoard';
import HomeSprite from '../../components/HomeSprite/HomeSprite'
import './HomePage.css'
import PersonalScoreBoard from '../../components/PersonalScoreBoard/PersonalScoreBoard';

export default function HomePage({profile, size, setProfile}) {
  const [xPos, setXPos] = useState(window.innerWidth / 2);
  const [yPos, setYPos] = useState(420);
  const mirror = (xPos - 100)

    
  return (
   <div className='HomePage'
    style={{
      height: size,
    }}>
   
    <h1>Try-outs!</h1>
    <h1>A Taco Bell Adventure</h1>
    <h3>Welcome {profile.name} to the Try-outs!</h3>
    <container
      className="scoreContainer"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <div>
          <HighScoreBoard 
          profile={profile} />
        </div>
        <div>
          <PersonalScoreBoard 
            profile={profile} 
            setProfile={setProfile} />
        </div>
    </container>
  </div>
  )
}