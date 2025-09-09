import AuthPage from './login';
import './App.css';
import Chatbot from './chatbot';
import Home from './home';
import MessagesDisplay from './MessagesDisplay';
import RemindersDisplay from './RemindersDisplay';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
            <Routes>
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<AuthPage />} />
                <Route path="/posts" element={<MessagesDisplay />} />
                <Route path="/reminders" element={<RemindersDisplay/>} />
            </Routes>
        </Router>
  );
}

export default App;
