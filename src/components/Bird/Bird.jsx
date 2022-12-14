import { useState, useEffect } from "react";
import Game from '../../pages/Game/Game'

export default function Bird({birdPosition}) {
  
  return (
   <div id="Bird"
    style={{
      position:'absolute',
      backgroundColor:'red',
      borderRadius:'50%',
      height: '20px',
      width: '20px',
      top: birdPosition}} >
  </div>

  )
}
