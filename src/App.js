import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {LogIn} from "./components/Login";
import {CreateAccount} from "./components/CreateAccount";
import {Main} from "./components/Main";
import "./styles/App.scss"
import {RegisterPage} from "./components/RegisterPage"
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/rejestracja" element={<RegisterPage />} />
          <Route path="/logowanie" element={<LogIn />} />
          <Route path="/organize_action" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}
export default App;
