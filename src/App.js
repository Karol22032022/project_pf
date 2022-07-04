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
          <div className="div_links">
          <nav>
              <Link className="link_log_in" to="/logIn">Zaloguj</Link>
              <Link className="link_create_account" to="/createAccount">Załóż konto</Link>

          </nav>
          <nav>
              <Link className="link_start" to="/">Start</Link>
              <Link className="link_what_about" to="/what_about">O co chodzi?</Link>
              <Link className="link_about_us" to="/about_us">O nas</Link>
              <Link className="link_organization" to="/organization">Fundacja i organizacje</Link>
              <Link className="link_contact" to="/contact">Kontakt</Link>
          </nav>
          </div>

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
