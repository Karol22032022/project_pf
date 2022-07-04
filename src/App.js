import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {LogIn} from "./components/login";
import {CreateAccount} from "./components/createAccount";
import {Main} from "./components/main";
import React from "react";


function App() {
  return (
   <>

      <Router>
          <nav>
              <Link to="/logIn">Zaloguj</Link>
              <Link to="/createAccount">Załóż konto</Link>

          </nav>
          <nav>
              <Link to="/">Start</Link>
              <Link to="/what_about">O co chodzi?</Link>
              <Link to="/about_us">O nas</Link>
              <Link to="/organization">Fundacja i organizacje</Link>
              <Link to="/contact">Kontakt</Link>
          </nav>


          <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/createAccount" element={<CreateAccount />} />
              <Route path="what_about" element={<LogIn />} />
              <Route path="/about_us" element={<CreateAccount />} />
              <Route path="/organization" element={<CreateAccount />} />
              <Route path="/contact" element={<CreateAccount />} />
          </Routes>

      </Router>


   </>
  );
}

export default App;
