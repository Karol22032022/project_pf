import React from "react";
import "../styles/ExamplesOne.scss";


export function ExamplesOne(){
  //  const [pages, setPages] = useState([FirstExamples]);
    return(
        <section className="fund_section">
            <section className="fund_one" style={{borderBottom:'1px solid gray'}}>
                <div className="div_with_two_params">
                <p className="fund_param_one_x">Fundacja "Dbam o zdrowie"</p>
                <p className="fund_param_one"> Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>
            </section>
            <section className="fund_one" style={{borderBottom:'1px solid gray'}}>
                <div className="div_with_two_params">
                    <p className="fund_param_one_x">Fundacja "Dla dzieci"</p>
                    <p className="fund_param_one"> Cel i misja: Pomoc dzieciom w trudnej sytuacji materialnej.</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <p>ubrania, meble, zabawki</p>
                </div>
            </section>
            <section className="fund_one">
            <div className="div_with_two_params">
                <p className="fund_param_one_x">Fundacja "Bez domu"</p>
                <p className="fund_param_one"> Cel i misja: Pomoc osobom bezdomnym.</p>
            </div>
            <div style={{display:'flex', alignItems:'center'}}>
                <p>ubrania, jedzenie, pomoc medyczna</p>
            </div>
        </section>
          <div className="buttons" style={{marginTop:'1rem'}}>
              <button className="button_one">1</button>
              <button className="button_two">2</button>
          </div>
        </section>

    )

}