import { useState, useEffect, useRef } from "react"
import Bird from '../../components/Bird/Bird'
// import Obstacles from '../../components/Obstacles/Obstacles'




export default function Game({user, profile}) {
  
  let gameHeight = (window.innerHeight - 40)
  let gameWidth = window.innerWidth
  
  /////////////Bird Code
  const position = 250
  const birdSize = 20
  const jumpHeight = 100
  const gravity = 6

  const [birdPosition, setBirdPosition] = useState(position)
  const [score, setScore] = useState(0)
  const [gameHasStarted, setGameHasStarted] = useState(false)
  const [time, setTime] = useState(0)

  function handleClick() {
    let newBirdPosition = birdPosition - jumpHeight;
    if (!gameHasStarted) {
      setGameHasStarted(true)
      setScore(0)
      setTime(0)
    }
    if (newBirdPosition < 0) {
      setBirdPosition(0)
    } else {
    setBirdPosition(newBirdPosition)
  }
}

useEffect(() => {
  if (gameHasStarted) {

  }
})

useEffect(() => {
  let timeId;
  if (gameHasStarted && birdPosition < gameHeight - birdSize ) {
   timeId = setInterval(() => {
    setBirdPosition(birdPosition => birdPosition + gravity) 
   }, 24)
  }
  return () => {
    clearInterval(timeId)
  }
}, [birdPosition, gameHasStarted, gameHeight])
  
///////////////Obstacle Code
const obWidth = 40;
const obGap = 200;
const [obHeight, setObHeight] = useState(200);
const [obLeft, setObLeft] = useState(gameWidth - obWidth - 40);
const bottomHeight = gameHeight - obGap - obHeight;


useEffect(() => {
  let obId;
  if (gameHasStarted && obLeft >= -obWidth) {
    obId = setInterval(() => {
      setObLeft((obLeft) => obLeft - 5);
    }, 24)
    return () => {
      clearInterval(obId)
    };
  }
  else {
    setObLeft(gameWidth - obWidth)
    setObHeight(Math.random() * (gameHeight - obGap));
  }
}, [gameHasStarted, obLeft, gameHeight, gameWidth]);

useEffect(() => {
  let interval;
  if (gameHasStarted) {
  console.log(profile)
  console.log(user)
  interval = setInterval(() => {
    let newTime = score + 1
    setScore(newTime)
    // setScore(interval)
  }, 5000);
  console.log(time)
} else if (!gameHasStarted) {
  clearInterval(interval);
}
return () => clearInterval(interval)
}, [gameHasStarted, score, setTime])

useEffect(() => {
  const collisionWithTop = birdPosition >= 0 && birdPosition < obHeight;
  const collisionWithBottom = birdPosition <= gameHeight && birdPosition >= gameHeight - bottomHeight;
  if (obLeft >= 0 && 
    obLeft <= obWidth && 
    (collisionWithTop || collisionWithBottom)) {
      setGameHasStarted(false)
    }
}, [birdPosition, obHeight, bottomHeight, obLeft, gameHeight])
 
  return ( 
    <div className="gamePage"
    style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      color: 'white',
      fontSize: 24,
      backgroundColor: 'blue',
      backgroundSize: '100%'
    }}
    >
      <h1>{score}</h1>
      <div id="Gamebox"
        onClick={handleClick}
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: gameHeight,
          width: gameWidth,
          overflow: 'hidden',
          margin: 'auto',
          position: 'relative',
        }}
        >
      <div id="monster"
          style={{
            position: 'relative',
            top: '50%',
            height: gameHeight,
            width: '20px',
            bottom: 0,
            backgroundColor: 'red',
            zIndex: 4

          }}>
       </div>
      <div>

      <Bird birdPosition={birdPosition} profile={profile} />
       <div id="obstacle-top"
          style={{
            position: "relative",
            backgroundColor: 'green',
            width: obWidth,
            height: obHeight,
            
            top: '0',
            left: obLeft
          }}>
        </div>
        <div id="obstacle-bottom"
          style={{
            position: "relative",
            backgroundColor: 'green',
            width: obWidth,
            height: bottomHeight,
            top: gameHeight - (obHeight + bottomHeight),
            left: obLeft
          }}>
        </div>
      </div>
    </div>
  </div>
  )
}