import React from 'react';
import "../styles/FourSteps.scss";
import {Link} from "react-router-dom";


export function FourSteps(){
    return(
        <section id="four_steps_scroll" className="four_steps_section_one">
        <div className="steps_text">
            <p className="steps_param">Wystarczą 4 proste kroki</p>
            <img alt="pic" src="https://firebasestorage.googleapis.com/v0/b/test-space-d850c.appspot.com/o/Decoration.svg?alt=media&token=1c2c8f64-bc39-4175-a2c8-99a82911b539"/>
        </div>
            <div className="steps_pictures">
                <div className="steps_picture_one">
                    <img alt="pic" src="https://firebasestorage.googleapis.com/v0/b/test-space-d850c.appspot.com/o/Icon-1.svg?alt=media&token=4016144e-56a8-492c-be31-68e011b3ab3b"/>
                <p className="param_under_graph_one">Wybierz rzeczy</p>
                    <div style={{width:'5rem', height:'1px', borderBottom:'1px solid black'}}/>
                    <p className="param_under_graph_two" style={{maxWidth:'8rem', textAlign:'center'}}>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="steps_picture_two">
                    <img alt="pic" src="https://firebasestorage.googleapis.com/v0/b/test-space-d850c.appspot.com/o/Icon-2.svg?alt=media&token=227d2ad9-e123-47cd-9e81-b5d3f568be41"/>
                    <p className="param_under_graph_one">Spakuj je</p>
                    <div style={{width:'5rem', height:'1px', borderBottom:'1px solid black'}}/>
                    <p className="param_under_graph_two" style={{maxWidth:'8rem', textAlign:'center'}}>skorzystaj z worków na śmieci</p>
                </div>
                <div className="steps_picture_three">
                    <img alt="pic" src="https://firebasestorage.googleapis.com/v0/b/test-space-d850c.appspot.com/o/Icon-3.svg?alt=media&token=2aae77ea-8c22-4498-84ee-5eddb3337666"/>
                    <p className="param_under_graph_one" style={{maxWidth:'8rem', textAlign:'center'}}>Zdecyduj komu chcesz pomóc</p>
                    <div style={{width:'5rem', height:'1px', borderBottom:'1px solid black'}}/>
                    <p className="param_under_graph_two" style={{maxWidth:'8rem', textAlign:'center'}}>wybierz zaufane miejsce</p>
                </div>
                <div className="steps_picture_four">
                    <img alt="pic" src="https://firebasestorage.googleapis.com/v0/b/test-space-d850c.appspot.com/o/Icon-4(1).svg?alt=media&token=b350ca45-53ed-4b82-a8cb-143630a993f4"/>
                    <p className="param_under_graph_one">Zamów kuriera</p>
                    <div style={{width:'5rem', height:'1px', borderBottom:'1px solid black'}}/>
                    <p className="param_under_graph_two" style={{maxWidth:'9rem', textAlign:'center'}}>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="four_steps_link">
                <div className="link_give_it" >
                    <Link className="link_to_things" style={{textDecoration:'none', color:'black'}}
                          to="/logowanie">ODDAJ RZECZY</Link>
                </div>

            </div>

</section>
    )


}