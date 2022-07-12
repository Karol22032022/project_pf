import React from "react";


export function ExamplesTwo(){

    return(
        <section className="action_section">
            <section className="fund_one" style={{borderBottom:'1px solid gray'}}>
                <div className="div_with_two_params">
                    <p className="fund_param_one_x">Organizacja "Lorem uno"</p>
                    <p className="fund_param_one"> Cel i misja: Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </section>
            <section className="fund_one" style={{borderBottom:'1px solid gray'}}>
                <div className="div_with_two_params">
                    <p className="fund_param_one_x">Organizacja "Lorem due"</p>
                    <p className="fund_param_one"> Cel i misja: Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </section>
            <section className="fund_one">
                <div className="div_with_two_params">
                    <p className="fund_param_one_x">Organizacja "Lorem tre"</p>
                    <p className="fund_param_one"> Cel i misja: Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </section>
            <div className="buttons" style={{marginTop:'1rem'}}>
                <button className="button_one">1</button>
                <button className="button_two">2</button>

            </div>
        </section>

    )

}
