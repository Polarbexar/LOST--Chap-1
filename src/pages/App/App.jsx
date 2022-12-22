import { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { useEffect } from 'react';
import { getUserProfile } from '../../utilities/profile-api'
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Game from '../GamePage/GamePage'
import ProfilePage from '../ProfilePage/ProfilePage';
import HomePage from '../HomePage/HomePage';
import './App.css';


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
          <div
          style={{
          fontSize: '20px'
          }}>
            <NavBar user={user} setUser={setUser} setProfile={setProfile} />
            {profile ? (
              <Routes>
                <Route path="/gamepage" element={<Game profile={profile} />} />
                <Route
                  path="/profilepage"
                  element={<ProfilePage profile={profile} handleProfileUpdate={handleProfileUpdate} />}
                />
                <Route path="/homepage" 
                element={<HomePage profile={profile} setProfile={setProfile} size={size} />} />
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

