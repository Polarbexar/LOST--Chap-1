import { useState } from "react"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LogInForm from "../../components/LoginInForm/LoginInForm"
import './AuthPage.css'

export default function AuthPage({setUser}) {
  const [form, setForm] = useState("login") // "login" or "signup"
  return (
    <main className="authMain">
    {form === "signup" ? (
      <>
        <h1>Welcome to Taco Bell Island</h1>
        <h1>Sign Up</h1>
        <SignUpForm setUser={setUser} />
        <button className="switchBtn" onClick={() => setForm("login")}>
          Already have an account? Log in here
        </button>
      </>
    ) : (
      <>
      <h1>Welcome to Taco Bell Island</h1>
        <h1>Log In</h1>
        <LogInForm setUser={setUser} style={{ width: '500px'}}/>
        <button className="switchBtn" onClick={() => setForm("signup")}>
          Don't have an account? Sign up here
        </button>
      </>
    )}
  </main>
);
}







