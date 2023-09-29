import SignIn from './component/auth/signIn';
import './App.css';
import SignUp from './component/auth/signUp';
import AuthDetails from './component/AuthDetails';

function App() {
  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
      <AuthDetails />
    </div>
  );
}

export default App;
