import React from 'react';
import {Link as LinkScroll} from "react-scroll";
import {Link} from "react-router-dom";
import "../styles/Header.scss";

export function Header(){
    return(
        <>
        <header>
            <div className="link__div_links">
                <nav className="link__nav_one">
                    <Link className="link__log_in" style={{textDecoration:'none'}}
                          to="/logowanie">Zaloguj</Link>
                    <Link className="link__create_account" style={{textDecoration:'none'}}
                          to="/rejestracja">Załóż konto</Link>

                </nav>

                <nav className="links_nav_second">
                    <LinkScroll className="link__start" style={{textDecoration:'none'}}
                          to="div_start_scroll">Start</LinkScroll>
                    <LinkScroll className="link__what_about" style={{textDecoration:'none'}}
                          to="four_steps_scroll">O co chodzi?</LinkScroll>
                    <LinkScroll className="link__about_us" style={{textDecoration:'none'}}
                          to="test_scroll">O nas</LinkScroll>
                    <LinkScroll className="link__organization" style={{textDecoration:'none'}}
                          to="our_help">Fundacja i organizacje</LinkScroll>
                    <LinkScroll className="link__contact" style={{textDecoration:'none'}}
                          to="contact">Kontakt</LinkScroll>
                </nav>
            </div>
        </header>
        </>
    )
}