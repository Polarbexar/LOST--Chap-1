import ProfileForm from "../../components/ProfileForm/ProfileForm"
import { useNavigate } from "react-router-dom"


export default function ProfilePage({profile, handleProfileUpdate}) {
let navigate = useNavigate()
  
  return (
  <>
  <h1>This is the profile page</h1> 
  <br/>
  <ProfileForm 
  profile={profile} 
  handleProfileUpdate={handleProfileUpdate}
  navigate={navigate}/>
  </>
  )
}