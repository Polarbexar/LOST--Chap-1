import { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Game from '../GamePage/GamePage'
import ProfilePage from '../ProfilePage/ProfilePage';
import HomePage from '../HomePage/HomePage';
import { getUserProfile } from '../../utilities/profile-api'
import './App.css';
import { useEffect } from 'react';
import { set } from 'mongoose';



export default function App() {
  let size = window.innerHeight
  const [user, setUser] = useState(getUser())
  const [profile, setProfile] = useState(false)
  const [updateTrigger, setUpdateTrigger] = useState(false)
  
  useEffect(() => {
    if (user) {
    getProfile()
    async function getProfile() {
    const currentUser = await getUserProfile()
    setProfile(currentUser)
    }
  }
  }, [user, updateTrigger, setProfile])

  function handleProfileUpdate() {
    setUpdateTrigger(!updateTrigger)
  }

  return (
    <main className="App">
   {user ? (
      <div>
        <NavBar user={user} setUser={setUser} setProfile={setProfile} />
        {profile ? (
          <Routes>
            <Route path="/gamepage" element={<Game profile={profile} />} />
            <Route
              path="/profilepage"
              element={<ProfilePage profile={profile} handleProfileUpdate={handleProfileUpdate} />}
            />
            <Route path="/homepage" 
            element={<HomePage profile={profile} size={size} />} />
          </Routes>
        ) : (
          <ProfilePage profile={profile} handleProfileUpdate={handleProfileUpdate}/>
        )}
      </div>
    ) : (
      <AuthPage setUser={setUser} />
    )}
  </main>
  );
}

