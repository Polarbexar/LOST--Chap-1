import { useState, useEffect, useRef } from "react"
import GameSprite from '../../components/GameSprite/GameSprite'
import { addProfileScore, getHighScores } from '../../utilities/score-api'
// import Obstacles from '../../components/Obstacles/Obstacles'

export default function Game({user, profile}) {
  
  //Game State
  let collisionZone = window.innerWidth / 2
  const [gameWidth, setGameWidth] = useState(window.innerWidth)
  const [gameHeight, setGameHeight] = useState(window.innerHeight)
  const [score, setScore] = useState(0)
  const [gameHasStarted, setGameHasStarted] = useState(false)
  const [time, setTime] = useState(0)
  
  //Character State
  const {charWidth, charHeight} = {charWidth: 100, charHeight: 100    }
  const [xPos, setXPos] = useState(gameWidth / 2 - charWidth / 2);
  const [yPos, setYPos] = useState(gameHeight - charHeight);

  //Obs State
  const obWidth = 40;
  const obGap = 200;
  const [obHeight, setObHeight] = useState(200);
  const [obLeft, setObLeft] = useState(gameWidth - obWidth - 40);
  const bottomHeight = gameHeight - obGap - obHeight;
  
  //Monster State
  const monstWidth = 350
  const [monstRight, setMonstRight] = useState(gameWidth - monstWidth)

  useEffect(() => {
      let monstId;
      if (gameHasStarted && monstRight < gameWidth - monstWidth) {
        monstId = setInterval(() => {
          setMonstRight((monstRight) => monstRight + 100);
        }, 5000)
        return () => {
          clearInterval(monstId)
        };
      }
      else {
        setMonstRight(-monstWidth)
      }
    }, [gameHasStarted, monstRight, monstWidth, gameWidth]);

   

  



  let charPosition = {xPos, yPos}
  function handleClick() {
    if (!gameHasStarted) {
      setGameHasStarted(true)
      setScore(0)
      setTime(0)
    }
  }

///////////////Obstacle Code

useEffect(() => {
  if (score >= 10) {
    scoreList()
    async function scoreList() {
    await addProfileScore({score})
    // await getHighScores()
    setGameHasStarted(false)
    }
  }
}, [score])

//Obs movement
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


//Calculate Score
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

//Colision
function isColliding(charRect, obRect) {
  // Calculate the distance between the centers of the bounding rectangles
  const dx = charRect.x + charRect.width / 2 - (obRect.x + obRect.width / 2);
  const dy = charRect.y + charRect.height / 2 - (obRect.y + obRect.height / 2);

  // Calculate the sum of the half-widths and half-heights of the rectangles
  const halfWidths = charRect.width / 2 + obRect.width / 2;
  const halfHeights = charRect.height / 2 + obRect.height / 2;

  // Check if the distance between the centers is less than the sum of the half-widths and half-heights
  if (Math.abs(dx) < halfWidths && Math.abs(dy) < halfHeights) {
    // The rectangles are colliding
    return true;
  }

  // The rectangles are not colliding
  return false;
}
useEffect(() => {
  // Calculate the bounding rectangles for the character and the obstacle
  const charRect = {
    x: xPos,
    y: yPos,
    width: charWidth,
    height: charHeight
  };
  const obRect = {
    x: obLeft,
    y: 0, // The obstacle is at the top of the screen
    width: obWidth,
    height: obHeight
  };
  if (isColliding(charRect, obRect)) {


  // Check if the character and the obstacle are colliding
  // if (charRect.x < obRect.x + obRect.width &&
  //     charRect.x + charRect.width > obRect.x &&
  //     charRect.y < obRect.y + obRect.height &&
  //     charRect.height + charRect.y > obRect.y) {
  //   // The character and the obstacle are colliding
    //  setGameHasStarted(false)
  }
}, [xPos, yPos, obLeft, obHeight]);
//Browser Size
useEffect(() => {
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [gameWidth, gameHeight])

function handleResize() {
  setGameHeight(window.innerHeight);
  setGameWidth(window.innerWidth);
  setXPos(gameWidth / 2 - charWidth / 2);
}
 
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
            width: monstWidth,
            bottom: 0,
            right: monstRight,
            zIndex: 4
            
          }}>
          <img src="./assets/1966242.gif" width={monstWidth} height={gameHeight - 200} alt="" />
       </div>
      <div>
            <GameSprite 
            profile={profile} 
            xPos={xPos}
            setXPos={setXPos}
            yPos={yPos}
            setYPos={setYPos} 
            charHeight={charHeight}
            charWidth={charWidth}/>


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