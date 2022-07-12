import React from "react";
import "../styles/formJS.scss";

const firstState = {
    name:'',
    email:"",
    text:"",
    nameError:"",
    emailError:"",
    textError:"",
    textComplete:"",
}

const lastState = {
    textComplete:"Wiadomość została wysłana! Wkrótce otrzymasz odpowiedź!",
}
export default class FormJs extends React.Component{

    state = firstState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState(
            {
                [event.target.name]: isCheckbox
                ?event.target.checked:
                    event.target.value,
                [event.target.email]: isCheckbox
                ?event.target.checked:
                    event.target.value,
                [event.target.text]: isCheckbox
                    ?event.target.checked:
                    event.target.value
            })};
    validate = () => {
     let nameError = "";
     let emailError = "";
     let textError = "";

     if(!this.state.name) {
         nameError = "Wpisz imię!"
     }

     if (!this.state.email.includes('@')){
         emailError = 'Podany email nie jest prawidłowy!';
     }
        if (!this.state.email){
            emailError = 'Wpisz swój email!';
        }
        if (!this.state.text){
            textError = 'Wpisz wiadomość!';
        }
        if (this.state.text.length < 120){
            textError = 'Wiadomość musi zawierać minimum 120 znaków!';
        }
     if (emailError || nameError || textError){
         this.setState({emailError, nameError, textError});
         return false;
     }

     return true
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
        console.log(this.state);
        this.setState(firstState)
//https://fer-api.coderslab.pl/v1/portfolio/contact
            fetch('', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(this.state)
            }).then(() => {
                console.log('sending complete')
                this.setState(lastState);
            })
        }};

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="div_complete" style={{color:'green'}}>{this.state.textComplete}</div>
                <section style={{display:'flex', flexDirection:'row'}}>
                    <div className="div_name">
                        <div>
                        <p className="param_your_name">Wpisz swoje imię</p>
                    <input
                    className="input_text_name"
                    name="name"
                    type="text"
                    placeholder="Imię"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                </div>
                        <div className="div_nameError" style={{color:'red'}}>{this.state.nameError}</div>
                    </div>
                <div className="div_mail">
                    <div>
                    <p className="param_your_mail">Wpisz swój mail</p>
                    <input
                        className="input_email"
                        name="email"
                        type="email"
                        placeholder="Twój e-mail"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                    <div className="div_emailError" style={{color:'red'}}>{this.state.emailError}</div>
                </div>
                </section>
                <div className="div_text_message">
                    <p className="param_your_message" >Wpisz swoją wiadomość</p>
                    <textarea
                        className="text_area_message"
                        name="text"
                        id="text_message"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aperiam aut beatae consequatur eum expedita facere inventore iste libero nesciunt, qui quos repellendus sed suscipit totam vel velit veritatis voluptas."
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="div_textError" style={{color:'red'}} >{this.state.textError}</div>
                <div className="button_div">
                    <button className="button_submit" type="submit">Wyślij!</button>
                </div>
            </form>
        );
    }
}


