import React from 'react';
import {Link} from "react-router-dom";
import "../styles/main.scss";
import {Header} from "./header";





export function Main(){
    return(
        <>
           <section className="main_with_photo">

            <section className="two_sections_main">

   <section className="section_param">
       <Header/>
       <div className="div_dupa">
            <p className="text_start_to_help">Zacznij pomagać!</p>
            <p className="text_give_things">Oddaj niechciane rzeczy w zaufane ręce</p>
           <img className="decoration" src="https://firebasestorage.googleapis.com/v0/b/test-space-d850c.appspot.com/o/Decoration.svg?alt=media&token=50aec2f3-8309-4dd8-a67b-fb78906235c7"/>
           <div className="div_with_links">
           <div className="link_give_it" >
                <Link className="link_to_things" style={{textDecoration:'none'}}
                      to="/give_things">ODDAJ RZECZY</Link>
            </div>

            <div className="link_organizing">
                <Link className="link_to_organize" style={{textDecoration:'none'}}
                      to="/organize_action">ZORGANIZUJ ZBIÓRKĘ</Link>

            </div>
           </div>
       </div>

   </section>

            </section>
           </section>
        </>
    )

}