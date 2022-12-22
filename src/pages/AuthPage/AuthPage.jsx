import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LogInForm from "../../components/LoginInForm/LoginInForm"
import './AuthPage.css'

export default function AuthPage({setUser}) {
  return (
    <main className="authMain">
      <h1>Sign Up</h1>
      <SignUpForm setUser={setUser} />
      <h1>Log In</h1>
      <LogInForm setUser={setUser} />
    </main>
  );
}