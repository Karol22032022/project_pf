import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {LogIn} from "./components/login";
import {CreateAccount} from "./components/createAccount";
import {Main} from "./components/main";
import "./styles/app.scss"
import React from "react";


function App() {
  return (
   <>

      <Router>


          <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/createAccount" element={<CreateAccount />} />
              <Route path="what_about" element={<LogIn />} />
              <Route path="/about_us" element={<CreateAccount />} />
              <Route path="/organization" element={<CreateAccount />} />
              <Route path="/contact" element={<CreateAccount />} />
              <Route path="/give_things" element={<CreateAccount />} />
              <Route path="/organize_action" element={<CreateAccount />} />
          </Routes>

      </Router>


   </>
  );
}

export default App;
