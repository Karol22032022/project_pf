import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {LogIn} from "./components/Login";
import {CreateAccount} from "./components/CreateAccount";
import {Main} from "./components/Main";
import "./styles/app.scss"

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/give_things" element={<LogIn />} />
          <Route path="/organize_action" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}
export default App;
