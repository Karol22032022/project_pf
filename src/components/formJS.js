import React from "react";
import "../styles/formJS.scss";

const firstState = {
    name:"",
    email:"",
    text:"",
    nameError:"",
    emailError:"",
    textError:"",
}
export default class FormJs extends React.Component{

    state = firstState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState(
            {
                [event.target.name]: isCheckbox
                ?event.target.checked:
                    event.target.value
            })};
    validate = () => {
     let nameError = "";
     let emailError = "";
     let textError= "";

     if(!this.state.name) {
         nameError = "Wpisz imię!"
     }

     if (this.state.email.includes('@')){
         emailError = 'Podany email nie jest prawidłowy!';
     }
     if (emailError || nameError || textError){
         this.setState({emailError, nameError, textError});
         return false;
     }

     return true;
    }
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
        console.log(this.state);
        this.setState(firstState)
        }};


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <section style={{display:'flex', flexDirection:'row'}}>
                <div>
                    <p>Wpisz swoje imię</p>
                    <input
                    name="Imię"
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                </div>
                <div>{this.state.nameError}</div>
                <div>
                    <p>Wpisz swój mail</p>
                    <input
                        name="email"
                        placeholder="email@mail.com"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                </section>
                <div>
                    <p>Wpisz swoją wiadomość</p>
                    <input
                        type="text"
                        placeholder="Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Amet, aperiam aut beatae consequatur
                        eum expedita facere inventore iste libero
                        nesciunt, qui quos repellendus sed suscipit totam
                        vel velit veritatis voluptas."
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Wyślij!</button>
                </div>
            </form>
        )
    }
}


