import React from 'react';
import {Link} from "react-router-dom";




export function HeadOne(){
    return(
<header>
    <Link to="/logIn">Zaloguj</Link>
    <Link to="/createAccount">Załóż konto</Link>

</header>


    )

}