import { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Game from '../GamePage/GamePage'
import ProfilePage from '../ProfilePage/ProfilePage';
import HomePage from '../HomePage/HomePage';
import './App.css';



export default function App() {

  const [user, setUser] = useState(getUser())



  return (
    <main className="App">
  
      {user ? 
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes> 
          {/* Route components in here */}
          <Route path="/gamepage" element={<Game />} />
          <Route path="profilepage" element={<ProfilePage />} />
          <Route path="homepage" element={<HomePage />} />
        </Routes>
      </>
      :
      <AuthPage setUser={setUser} />
      }
    </main>
  );
}
