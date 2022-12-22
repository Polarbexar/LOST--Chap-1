import React, { useState, useEffect } from 'react';

export default function GameSprite({profile, xPos, yPos, setXPos, setYPos, charWidth, charHeight}) {
 
  const [jumping, setJumping] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 32) {
        setJumping(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.keyCode === 32) {
        setJumping(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  //Gavity 
  useEffect(() => {
    let interval = null;
    if (!jumping && yPos < 750) {
      interval = setInterval(() => {
        setYPos((y) => Math.min(y + 5, 750));
      }, 16);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [jumping, yPos, setYPos]);
  

  useEffect(() => {
    let interval = null;
    if (jumping) {
      interval = setInterval(() => {
        setYPos((y) => Math.max(y - 10 , 0));
      }, 24);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [yPos, setYPos, jumping])
 

  return (
    <div
    style={{
      position: 'absolute',
      left: `${xPos}px`,
      top: `${yPos}px`,
    }}
    >
    <img src={profile.avatar}width={charWidth} height={charHeight} alt="character"></img>
    </div>
    );
  }
