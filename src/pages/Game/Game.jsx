import { useState, useEffect } from "react"
import Bird from '../../components/Bird/Bird'
import Obstacles from '../../components/Obstacles/Obstacles'




export default function Game() {
  
  let gameHeight = (window.innerHeight - 40)
  let gameWidth = window.innerWidth
  
  /////////////Bird Code
  const position = 250
  const birdSize = 20
  const jumpHeight = 100
  const gravity = 6

  const [birdPosition, setBirdPosition] = useState(position)
  const [score, setScore] = useState(-2)
  const [gameHasStarted, setGameHasStarted] = useState(false)

  function handleClick() {
    let newBirdPosition = birdPosition - jumpHeight;
    if (!gameHasStarted) {
      setGameHasStarted(true)
    }
    if (newBirdPosition < 0) {
      setBirdPosition(0)
    } else {
    setBirdPosition(newBirdPosition)
  }
}

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
}, [birdPosition, gameHasStarted])
  
///////////////Obstacle Code
const obWidth = 40;
const obGap = 200;
const [obHeight, setObHeight] = useState(200);
const [obLeft, setObLeft] = useState(gameWidth - obWidth);
const bottomHeight = gameHeight - obGap - obHeight;

const obInfo = [obHeight, obGap, obWidth] 

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
  setScore(score => score + 1)
}, [gameHasStarted, obLeft]);

useEffect(() => {
  const collisionWithTop = birdPosition >= 0 && birdPosition < obHeight;
  const collisionWithBottom = birdPosition <= gameHeight && birdPosition >= gameHeight - bottomHeight;
  if (obLeft >= 0 && 
      obLeft <= obWidth && 
      (collisionWithTop || collisionWithBottom)) {
    setGameHasStarted(false)
  }
}, [birdPosition, obHeight, bottomHeight, obLeft])
 
  return ( 
    <div className="gamePage"
    style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      color: 'white',
      fontSize: 24,
      backgroundColor: 'blue',
      backgroundSize: '100%'
    }}
    >
    <div id="Gamebox"
      onClick={handleClick}
      style={{
        height: gameHeight,
        width: gameWidth,
        overflow: 'hidden',
        margin: 'auto'
      }}
    >
     <>
      <Bird birdPosition={birdPosition} />
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

      {/* <Obstacles 
      obWidth={obWidth} 
      bottomHeight={bottomHeight}
      gameHeight={gameHeight}
      obLeft={obLeft} 
      obHeight={obHeight} */}
     </>
    </div>
  </div>
  )
}