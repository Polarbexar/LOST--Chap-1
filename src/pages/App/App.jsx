import { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Game from '../GamePage/GamePage'
import ProfilePage from '../ProfilePage/ProfilePage';
import HomePage from '../HomePage/HomePage';
import getUserProfile from '../../utilities/profile-api'
import './App.css';
import { useEffect } from 'react';



export default function App() {

  const [user, setUser] = useState(getUser())
  const [profile, setProfile] = useState({})
  
  useEffect(() => {
  async function getProfile() {
  const currentUser = await getUserProfile()
  console.log(currentUser)
  console.log(currentUser[0].name)
  setProfile(currentUser[0])
  }
  getProfile()
  }, [setProfile])
  
  return (
    <main className="App">
      <h1>hello {profile.name}</h1>
      {user ? 
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes> 
          {/* Route components in here */}
          <Route path="/gamepage" element={<Game profile={profile}/>} />
          <Route path="profilepage" element={<ProfilePage />} />
          <Route path="homepage" element={<HomePage profile={profile} />} />
        </Routes>
      </>
      :
      <AuthPage setUser={setUser} />
      }
    </main>
  );
}
