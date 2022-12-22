import {useState} from 'react'
import HighScoreBoard from '../../components/HighScoreBoard/HighScoreBoard';
import PersonalScoreBoard from '../../components/PersonalScoreBoard/PersonalScoreBoard';
import './HomePage.css'

export default function HomePage({profile, size, setProfile}) {
  const [isHovered, setIshovered] = useState(false);

  function playMusic() {
  }
    
  return (
   <div className='HomePage'
    style={{
      height: '100vh',
    }}>
    <section className="title">
    <h1>Try-Outs!</h1>
    <h1>A Taco Bell Adventure</h1>
    </section>
    <h3>Welcome {profile.name} to the Try-outs!</h3>
    <section
      className="scoreContainer"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <div>
          <HighScoreBoard 
          profile={profile} />
        </div>
        <div>
          <PersonalScoreBoard 
            profile={profile} 
            setProfile={setProfile} />
        </div>
        <section className="characterBox">
        <div onClick={playMusic}>
          <img src={profile.avatar} alt="" onMouseEnter={() => setIshovered(true)}
        onMouseLeave={() => setIshovered(false)}
        style={{
          backgroundColor: isHovered ? "rgba(200, 200, 200, 1)" : "",
          cursor: 'pointer',
          transition: "background-color 0.2s ease-in-out",
        }}  />
        </div>
        </section>
    </section>
  </div>
  )
}



//   useEffect(() => {
//     let walkInterval = setInterval(() => {
//       // update the left position of the div
//       let currentLeft = div.style.left
//       div.style.left = currentLeft + 1 + 'px'
//     }, 24)
//     return () => clearInterval(walkInterval)
//   }, [div])

//   function playMusic() {
//     // add code to play music here
//   }

//   return (
//     <div
//       className="HomePage"
//       style={{
//         height: '100vh',
//       }}
//     >
//       <h1>Try-outs!</h1>
//       <h1>A Taco Bell Adventure</h1>
//       <h3>Welcome {profile.name} to the Try-outs!</h3>
//       <section
//         className="scoreContainer"
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//         }}
//       >
//         <div>
//           <HighScoreBoard profile={profile} />
//         </div>
//         <div>
//           <PersonalScoreBoard
//             profile={profile}
//             setProfile={setProfile}
//           />
//         </div>
//         <section className="characterBox" ref={divRef}>
//           <div onClick={playMusic}>
//             <img
//               src="./assets/bowser