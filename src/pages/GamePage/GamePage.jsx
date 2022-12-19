import { useState, useEffect, useRef } from "react"
import Sprite from '../../components/SpriteGame/Sprite'
import addProfileScore from '../../utilities/score-api'
// import Obstacles from '../../components/Obstacles/Obstacles'

export default function Game({user, profile}) {
  
  let gameHeight = (window.innerHeight - 40)
  let gameWidth = window.innerWidth
  let collisionZone = window.innerWidth / 2
  
  const [score, setScore] = useState(0)
  const [gameHasStarted, setGameHasStarted] = useState(false)
  const [time, setTime] = useState(0)
  const [xPos, setXPos] = useState(window.innerWidth / 2);
  const [yPos, setYPos] = useState(700);
  
  let charPosition = {xPos, yPos}
  function handleClick() {
    if (!gameHasStarted) {
      setGameHasStarted(true)
      setScore(0)
      setTime(0)
    }
  }

///////////////Obstacle Code
const obWidth = 40;
const obGap = 200;
const [obHeight, setObHeight] = useState(200);
const [obLeft, setObLeft] = useState(gameWidth - obWidth - 40);
const bottomHeight = gameHeight - obGap - obHeight;

useEffect(() => {
  if (score >= 7) {
    scoreList()
    async function scoreList() {
    await addProfileScore({score})
    setGameHasStarted(false)
    }
  }
}, [score])

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
  interval = setInterval(() => {
    let newTime = score + 1
    setScore(newTime)
  }, 1000);
} else if (!gameHasStarted) {
  clearInterval(interval);
}
return () => clearInterval(interval)
}, [gameHasStarted, score, setTime])

useEffect(() => {
  
  if (xPos === collisionZone && charPosition <= gameHeight - bottomHeight) {
      scoreList()
      setGameHasStarted(false)
      async function scoreList() {
      await addProfileScore({score})
    }
    }
}, [obHeight, bottomHeight, obLeft, gameHeight, score])
 
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
      <h1>{ score}</h1>
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
            top: '30%',
            height: gameHeight,
            width: '20px',
            bottom: 0,
            backgroundColor: 'red',  
            zIndex: 4
            
          }}>
       </div>
      <div>
            <Sprite 
            profile={profile} 
            xPos={xPos}
            setXPos={setXPos}
            yPos={yPos}
            setYPos={setYPos} />
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