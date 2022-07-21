import React from 'react';
import {Header} from "./Header";
import "../styles/RegisterPage.scss";

export function RegisterPage(){
    return(
        <>
            <Header/>
            <section className="section_register_form">
                <p className="param_create_account">Załóż konto</p>
                <img  alt="decoration"
                      src="https://firebasestorage.googleapis.com/v0/b/test-space-d850c.appspot.com/o/Decoration.svg?alt=media&token=1c2c8f64-bc39-4175-a2c8-99a82911b539"/>
                <div className="div_form_regi">
                <div className="div_register_form">
                    <p className="register_param_email">Email</p>
                    <input className="mail_input" type="email"/>
                    <p className="register_param_password">Hasło</p>
                    <input className="password_input"/>
                    <p className="register_param_repeat_password">Powtórz hasło</p>
                    <input className="repeat_password"/>
                </div>
                </div>
                <section className="buttons_register_form">
                    <button className="button_log_in">Zaloguj się</button>
                    <button className="button_create_account">Załóż konto</button>
                </section>
            </section>
        </>
    )
}