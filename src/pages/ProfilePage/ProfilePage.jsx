import ProfileForm from "../../components/ProfileForm/ProfileForm"
import { useNavigate } from "react-router-dom"
import './ProfilePage.css'


export default function ProfilePage({profile, handleProfileUpdate}) {
let navigate = useNavigate()
  
  return (
  <>
  
  <br/>
  <ProfileForm 
  profile={profile} 
  handleProfileUpdate={handleProfileUpdate}
  navigate={navigate}/>
  </>
  )
}