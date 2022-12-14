import { useState, useEffect } from "react"
import Bird from '../../components/Bird/Bird'



export default function Game() {
  
  let gameHeight = (window.innerHeight - 40)
  let gameWidth = window.innerWidth
  const gravity = 6

  const position = 250
  const birdSize = 20
  const jumpHeight = 100

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
     {/* <Obstacles />  */}
     </>
     </div>
  </div>
  )
}