import { useState, useEffect } from "react"
import Bird from '../../components/Bird/Bird'



export default function Game() {
  
  const gameHeight = 500
  const gameWidth = 500
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
    onClick={handleClick}
    style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      color: 'white',
      fontSize: 24
    }}
    >
      
    <div id="Gamebox"
      style={{
        backgroundColor: 'blue',
        height: '500px',
        width: '500px',
        overflow: 'hidden'
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