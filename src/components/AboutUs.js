import React from "react";
import "../styles/about_us.scss";
import FormJs from "./FormJs";
import {useState} from "react";
import {ExamplesThree} from "./ExamplesThree";
import {ExamplesTwo} from "./ExamplesTwo";
import {ExamplesOne} from "./ExamplesOne";


const pageOne = ExamplesOne;
const pageTwo = ExamplesTwo;
const pageThree = ExamplesThree;


export function AboutUs() {

    const [page, setPage] = useState([pageOne]);

        return (
            <>
            <section id="test_scroll" className="section_about_us">
                <div className="div_about_text">
                    <p className="param_about">O nas</p>
                    <img alt="decoration"
                         src="https://firebasestorage.googleapis.com/v0/b/test-space-d850c.appspot.com/o/Decoration.svg?alt=media&token=1c2c8f64-bc39-4175-a2c8-99a82911b539"/>
                    <p className="param_lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
                        eveniet, nulla. A assumenda culpa enim error eveniet excepturi, harum iure magni, maiores
                        nesciunt porro praesentium recusandae, rerum suscipit voluptate voluptatum?</p>
                    <div className="sing_param">
                        <img alt="decoration"
                             src="https://firebasestorage.googleapis.com/v0/b/test-space-d850c.appspot.com/o/Signature(1).svg?alt=media&token=9477b152-0530-4aea-81b7-388e91455061"/>
                    </div>
                </div>
                <div className="div_about_photo">

                </div>


            </section>

            <section id="our_help" className="help_for">

                <p className="help_who">Komu pomagamy?</p>
                <img alt="decoration"
                     src="https://firebasestorage.googleapis.com/v0/b/test-space-d850c.appspot.com/o/Decoration.svg?alt=media&token=1c2c8f64-bc39-4175-a2c8-99a82911b539"/>
            </section>
            <section className="section_with_params_who">

                <button className="param_one_who" style={{backgroundColor:'white'}} onClick={() => setPage(pageOne)}>
                    <p className="param_fund">Fundacjom</p>
                </button>
                <button className="param_two_who" style={{backgroundColor:'white'}} onClick={() => setPage(pageTwo)}>
                    <p className="param_org">Organizacjom pozarządowym</p>
                </button>
                <button className="param_three_who" style={{backgroundColor:'white'}} onClick={() => setPage(pageThree)}>
                    <p className="param_local">Lokalnym zbiórkom</p>
                </button>

            </section>
            <section className="text_who_section">
                <div className="text_about_who_one">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laboriosam,
                        modi officia quaerat reiciendis repellendus vero. Delectus eaque et incidunt iste, iusto
                        laboriosam maiores mollitia quidem,
                        quos repellat repudiandae vitae!</p>
                </div>
            </section>
            <section className="section_with_examples">
            <div>{page}</div>

            </section>
        <section className="section_contact_with_us">

            <div className="div_contact_photo">

            </div>
            <section id="contact" className="section_contact_form">

                <p className="param_about">Skontaktuj się z nami!</p>
                <img alt="decoration"
                     src="https://firebasestorage.googleapis.com/v0/b/test-space-d850c.appspot.com/o/Decoration.svg?alt=media&token=1c2c8f64-bc39-4175-a2c8-99a82911b539"/>
                <FormJs/>

            </section>
        </section>
    </>
    )
}