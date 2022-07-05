import React from 'react';
import {Link} from "react-router-dom";
import "../styles/header.scss";

export function Header(){
    return(
        <>
        <header>
            <div className="link__div_links">
                <nav className="link__nav_one">
                    <Link className="link__log_in" style={{textDecoration:'none'}}
                          to="/logIn">Zaloguj</Link>
                    <Link className="link__create_account" style={{textDecoration:'none'}}
                          to="/createAccount">Załóż konto</Link>

                </nav>

                <nav className="links_nav_second">
                    <Link className="link__start" style={{textDecoration:'none'}}
                          to="/">Start</Link>
                    <Link className="link__what_about" style={{textDecoration:'none'}}
                          to="/what_about">O co chodzi?</Link>
                    <Link className="link__about_us" style={{textDecoration:'none'}}
                          to="/about_us">O nas</Link>
                    <Link className="link__organization" style={{textDecoration:'none'}}
                          to="/organization">Fundacja i organizacje</Link>
                    <Link className="link__contact" style={{textDecoration:'none'}}
                          to="/contact">Kontakt</Link>
                </nav>
            </div>





        </header>




        </>



    )


}