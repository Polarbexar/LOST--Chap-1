import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LogInForm from "../../components/LoginInForm/LoginInForm"

export default function AuthPage({setUser}) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser} />
      <LogInForm setUser={setUser} />
    </main>
  );
}