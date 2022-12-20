import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser, setProfile}) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
    setProfile(false)
  }
  return (
  <nav>
    <Link to="/gamepage">Game</Link>
    &nbsp; | &nbsp;
    <Link to="/profilepage">Profile</Link>
    &nbsp; | &nbsp;
    <Link to="/homepage">Home</Link>
    &nbsp; | &nbsp;
    <span>Welcome, {user.name}</span>
    &nbsp; | &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
  </nav>
  );
}