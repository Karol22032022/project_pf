import React from 'react';
import {Link} from "react-router-dom";
import {Header} from "./Header";
import {Yellow} from "./YellowPart";
import {FourSteps} from "./FourSteps";
import {AboutUs} from "./AboutUs";
import "../styles/Main.scss";


export function Main() {
    return (
        <>
            <section className="main_with_photo">
                <section className="two_sections_main">
                    <section className="section_param">
                        <Header/>
                        <div id="div_start_scroll" className="div_start">
                            <p className="text_start_to_help">Zacznij pomagać!</p>
                            <p className="text_give_things">Oddaj niechciane rzeczy w zaufane ręce</p>
                            <img className="decoration" alt="decoration"
                                 src="https://firebasestorage.googleapis.com/v0/b/test-space-d850c.appspot.com/o/Decoration.svg?alt=media&token=1c2c8f64-bc39-4175-a2c8-99a82911b539"/>
                            <div className="div_with_links">
                                <div className="link_give_it">
                                    <Link className="link_to_things" style={{textDecoration: 'none'}}
                                          to="/logowanie">ODDAJ RZECZY</Link>
                                </div>
                                <div className="link_organizing">
                                    <Link
                                        className="link_to_organize"
                                        style={{textDecoration: 'none'}}
                                        to="/organize_action"
                                    >
                                        ZORGANIZUJ ZBIÓRKĘ
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <Yellow/>
            <FourSteps/>
            <AboutUs/>

        </>
    )

}