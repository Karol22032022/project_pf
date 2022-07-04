import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {LogIn} from "./components/login";
import {CreateAccount} from "./components/createAccount";
import {HeadOne} from "./components/header";


function App() {
  return (
   <>

      <Router>
          <Routes>
          <Route path="/" element={<HeadOne />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/createAccount" element={<CreateAccount />} />
              <Route path="/" element={<HeadOne />} />
              <Route path="/logIn" element={<LogIn />} />
              <Route path="/createAccount" element={<CreateAccount />} />


          </Routes>
      </Router>


   </>
  );
}

export default App;
