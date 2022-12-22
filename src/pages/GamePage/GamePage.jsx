import { useState, useEffect, useRef } from "react"
import GameSprite from '../../components/GameSprite/GameSprite'
import { addProfileScore, getHighScores } from '../../utilities/score-api'
import styled from "styled-components"
// import Obstacles from '../../components/Obstacles/Obstacles'

export default function Game({user, profile}) {
    const [gameWidth, setGameWidth] = useState(window.innerWidth)
    const [gameHeight, setGameHeight] = useState(700)
    const [score, setScore] = useState(0)
    const [gameHasStarted, setGameHasStarted] = useState(false)
    const [time, setTime] = useState(0)

  //////////////////Game Code
  const gravity = 3

  ////////////////////Bird Code
  const position = 250
  const birdSize = 20
  const jumpHeight = 50
  const [birdPosition, setBirdPosition] = useState(position)


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

// Calculate Score
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

//////////////////Obstacles Code
const obWidth = 40;
const obGap = 300;
const [obHeight, setObHeight] = useState(200);
const [obLeft, setObLeft] = useState(gameWidth - obWidth);
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
}, [gameHasStarted, obLeft]);

useEffect(() => {
    if (score >= 4) {
      scoreList()
      async function scoreList() {
      await addProfileScore({score})
      await getHighScores()
      setGameHasStarted(false)
      }
    }
  }, [score])

// useEffect(() => {
//   const collisionWithTop = birdPosition >= 0 && birdPosition > obHeight;
//   const collisionWithBottom = birdPosition <= 500 && birdPosition >=500 - bottomHeight;
//   console.log(obHeight)
//   console.log(birdPosition)
//   if (obLeft >= 0 && 
//       obLeft <= obWidth && 
//       (collisionWithTop || collisionWithBottom)) {
//         console.log('collison')
//     setGameHasStarted(false)
//     setScore(0)
//   }
//   if (collisionWithTop) {
//     console.log('topCol')
//   }
//   if (collisionWithBottom) {
//     console.log('topCol')
//   }
// }, [birdPosition, obHeight, bottomHeight, obLeft])

////////////////////
  return (
    <div className="App"
      onClick={handleClick}
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        color: 'white',
        fontSize: 24
      }}>
      <div id="Gamebox"
        style={{
          backgroundColor: 'black',
          height: 700,
          width: 700,
          overflow: 'hidden'
        }}>
        <div id="Bird"
          style={{
            position:'absolute',
            backgroundColor: 'red',
            borderRadius:'50%',
            height: '50px',
            width: '20px',
            padding: '0',
            border: '0',
            margin: '0',
            top: birdPosition}} >
            <img src="./assets/bird-1-edit.gif" alt="" height='70' />
        </div>
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
        <span>{score}</span>
     </div>
    </div>
  );
}

  
//   //Game State
//   const [gameWidth, setGameWidth] = useState(window.innerWidth)
//   const [gameHeight, setGameHeight] = useState(window.innerHeight)
//   const [score, setScore] = useState(0)
//   const [gameHasStarted, setGameHasStarted] = useState(false)
//   const [time, setTime] = useState(0)
  
//   //Character State
//   const {charWidth, charHeight} = {charWidth: 100, charHeight: 100    }
//   const [xPos, setXPos] = useState(0);
//   const [yPos, setYPos] = useState(gameHeight - charHeight - 100        );

//   //Obs State
//   const obWidth = 40;
//   const obGap = 200;
//   const [obHeight, setObHeight] = useState(200);
//   const [obLeft, setObLeft] = useState(gameWidth - obWidth);
//   const bottomHeight = gameHeight - obGap - obHeight;
  
//   //Monster State
//   const monstWidth = 350
//   const [monstRight, setMonstRight] = useState(gameWidth - monstWidth)

//   useEffect(() => {
//       let monstId;
//       if (gameHasStarted && monstRight < gameWidth - monstWidth) {
//         monstId = setInterval(() => {
//           setMonstRight((monstRight) => monstRight - 100);
//         }, 5000)
//         return () => {
//           clearInterval(monstId)
//         };
//       }
//       else {
//         setMonstRight(-monstWidth)
//       }
//     }, [gameHasStarted, monstRight, monstWidth, gameWidth]);

//   function handleClick() {
//     if (!gameHasStarted) {
//       setGameHasStarted(true)
//       setScore(0)
//       setTime(0)
//     }
//   }

// ///////////////Obstacle Code

// useEffect(() => {
//   if (score >= 100) {
//     scoreList()
//     async function scoreList() {
//     await addProfileScore({score})
//     // await getHighScores()
//     setGameHasStarted(false)
//     }
//   }
// }, [score])

// //Obs movement
// useEffect(() => {
//   let obId;
//   if (gameHasStarted && obLeft >= -obWidth) {
//     obId = setInterval(() => {
//       setObLeft((obLeft) => obLeft - 5);
//     }, 24)
//     return () => {
//       clearInterval(obId)
//     };
//   }
//   else {
//     setObLeft(gameWidth - obWidth)
//     setObHeight(Math.random() * (gameHeight - obGap));
//   }
// }, [gameHasStarted, obLeft, gameHeight, gameWidth]);


// //Calculate Score
// useEffect(() => {
//   let interval;
//   if (gameHasStarted) {
//   interval = setInterval(() => {
//     let newTime = score + 1
//     setScore(newTime)
//   }, 1000);
// } else if (!gameHasStarted) {
//   clearInterval(interval);
// }
// return () => clearInterval(interval)
// }, [gameHasStarted, score, setTime])

// //Colision
// useEffect(() => {
  
//   if (yPos <= 500 && yPos >=500 -bottomHeight) {
//     console.log(yPos)
//     console.log('collision detected')
//   }
// }, [xPos, yPos, obHeight, bottomHeight, obLeft, obWidth, gameHasStarted])
// const position = (monstRight + monstWidth)


// //Browser Size
// useEffect(() => {
//   window.addEventListener('resize', handleResize)
//   return () => window.removeEventListener('resize', handleResize)
// }, [gameWidth, gameHeight])

// function handleResize() {
//   setGameHeight(window.innerHeight);
//   setGameWidth(window.innerWidth);
//   setXPos(gameWidth / 2 - charWidth / 2);
// }
// console.log(yPos)
 
//   return ( 
//     <div className="gamePage"
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         width: '100%',
//         color: 'white',
//         fontSize: 24,
//         backgroundColor: 'blue',
//         backgroundSize: '100%'
//       }}
//     >
//       <h1>{ score}</h1>
//       <div id="Gamebox"
//         onClick={handleClick}
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           height: '100%',
//           width: gameWidth,
//           overflow: 'hidden',
//           margin: 'auto',
//           position: 'relative',   
//         }}
//         >
//         {/* <div id="monster"
//           style={{
//             position: 'relative',
//             top: '20%',
//             height: gameHeight,
//             width: monstWidth,
//             bottom: 0,
//             right: monstRight,
//             zIndex: 4
            
//           }}>
//           <img src="./assets/1966242.gif" width={monstWidth} height={gameHeight - 200} alt="" />
//         </div> */}
//         <div>
//           <GameSprite 
//           profile={profile} 
//           xPos={xPos}
//           setXPos={setXPos}
//           yPos={yPos}
//           setYPos={setYPos} 
//           charHeight={charHeight}
//           charWidth={charWidth}/>
        

//           <div id="obstacle-top"
//             style={{
//               position: "relative",
//               backgroundColor: 'green',
//               width: obWidth,
//               height: obHeight,
              
//               top: '0',
//               left: obLeft
//             }}>
//           </div>
//           <div id="obstacle-bottom"
//             style={{
//               position: "relative",
//               backgroundColor: 'green',
//               width: obWidth,
//               height: bottomHeight,
//               top: gameHeight - (obHeight + bottomHeight),
//               left: obLeft
//             }}>
//           </div>
//         </div>
//         </div>
//     </div>
//   )
// }

