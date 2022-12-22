import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({user, setUser, setProfile}) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
    setProfile(false)
  }
  return (
  <nav>
    <Link to="/gamepage">Game</Link>
    <Link to="/profilepage">Profile</Link>
    <Link to="/homepage">Home</Link>
    <Link to="" onClick={handleLogOut}>Log Out</Link>
    <Link
      style={{
        color: 'black'
      }}>Welcome, {user.name}</Link>
  
  </nav>
  );
}