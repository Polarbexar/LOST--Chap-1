import {useState, useEffect} from 'react'
import HighScoreBoard from '../../components/HighScoreBoard/HighScoreBoard';
import PersonalScoreBoard from '../../components/PersonalScoreBoard/PersonalScoreBoard';
import './HomePage.css'

export default function HomePage({profile, size, setProfile}) {
  const [xPos, setXPos] = useState(window.innerWidth / 2);
  const [yPos, setYPos] = useState(420);
  const mirror = (xPos - 100)

    
  return (
   <div className='HomePage'
    style={{
      height: '100vh',
    }}>
   
    <h1>Try-outs!</h1>
    <h1>A Taco Bell Adventure</h1>
    <h3>Welcome {profile.name} to the Try-outs!</h3>
    <section
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
    </section>
  </div>
  )
}