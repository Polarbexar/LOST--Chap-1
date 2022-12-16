

export default function Bird({birdPosition}) {
  
  return (
   <div id="Bird"
   style={{
      backgroundSize: '20%',
      backgroundRepeat: 'no-repeat',
      justifyContent: 'center',
      position:'relative',
      left: '50%',
      top: birdPosition}} >
      <img src='/assests/mario.png' width="40px" height="40px"></img>
  </div>

  )
}
