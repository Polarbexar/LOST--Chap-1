import ProfileForm from "../../components/ProfileForm/ProfileForm"


export default function ProfilePage() {

  // async function addProfileInfo(data) {
  //   console.log(data)
  //   // const profile = await profileAPI.add(data)
  // }
  return (
  <>
  <h1>This is the profile page</h1> 
  <br/>
  <ProfileForm />
  </>
  )
}