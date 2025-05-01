import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountSettings from './AccountSettings'
import CreateAccountForm from './CreateAccountForm'
import LoginForm from './LoginForm'
import Welcome from './Welcome'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<CreateAccountForm />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App
