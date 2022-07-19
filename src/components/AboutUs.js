import React from "react";
import FormJs from "./FormJs";
import {usePagination} from "./components_examples/Pagination";
import {Pagination} from '@mui/material';
import {useState} from "react";
import "../styles/AboutUs.scss";

export function AboutUs() {
    const [count, setContent] = useState();
   const text1 = [
       {id:1, key:"first",value:"Fundacja nr.1", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus." ,prevState:null},
       {id:2, key:"first",value:"Fundacja nr.2", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},
       {id:3, key:"first",value:"Fundacja nr.3", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},
       {id:1, key:"first",value:"Fundacja nr.4", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},
       {id:1, key:"first",value:"Fundacja nr.5", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},
       {id:1, key:"first",value:"Fundacja nr.6", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},];
   const text2 = [
       {id:1, key:"first",value:"Organizacja nr.1", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus." ,prevState:null},
       {id:2, key:"first",value:"Organizacja nr.2", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},
       {id:3, key:"first",value:"Organizacja nr.3", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},
       {id:1, key:"first",value:"Organizacja nr.4", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},
       {id:1, key:"first",value:"Organizacja nr.5", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},
       {id:1, key:"first",value:"Organizacja nr.6", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},];
   const text3 = [
       {id:1, key:"first",value:"Zbiórka nr.1", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus." ,prevState:null},
       {id:2, key:"first",value:"Zbiórka  nr.2", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},
       {id:3, key:"first",value:"Zbiórka nr.3", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},
       {id:1, key:"first",value:"Zbiórka  nr.4", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},
       {id:1, key:"first",value:"Zbiórka  nr.5", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},
       {id:1, key:"first",value:"Zbiórka nr.6", tx:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           text:"Accusantium amet at cupiditate ducimus.",prevState:null},];
    const { setCurrentPage, currentPosts, amountOfPages } = usePagination(count);

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
                <button className="param_one_who" style={{backgroundColor:'white'}} onClick={() => setContent(text1)}>
                    <p className="param_fund">Fundacjom</p>
                </button>
                <button className="param_two_who" style={{backgroundColor:'white'}} onClick={() => setContent(text2)}>
                    <p className="param_org">Organizacjom pozarządowym</p>
                </button>
                <button className="param_three_who" style={{backgroundColor:'white'}}
                        onClick={() => setContent(text3)}>
                    <p className="param_local">Lokalnym zbiórkom</p>
                </button>
            </section>
            <section className="text_who_section">
                <div className="text_about_who_one">
                    <p>Pomagamy różnym podmiotom. Są to między innymi fundacje oraz organizacje pozarządowe.
                        Dzięki nam zorganizowano także wiele zbiórek. Przykłady znajdziesz poniżej!
                        Delectus eaque et incidunt iste, iusto laboriosam maiores mollitia quidem vitae!</p>
                </div>
            </section>
            <section className="section_with_examples">
              <div className="display_page">
                  <div>
                      {currentPosts.map((content, index) => {
                          return (
                              <div className="pagination_div" key={index}>
                                <div className="div_main_text">
                                 <div>
                                  <h2>{content.value}</h2>
                                 </div>
                                  <h4>{content.tx}</h4>
                                </div>
                                  <div className="text_right_side">
                                      <h4>{content.text} </h4>
                                  </div>
                              </div>
                          );
                      })}
                  </div>
                  <Pagination
                      count={amountOfPages}
                      onChange={(event, page) => setCurrentPage(page)}
                  />
              </div>
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