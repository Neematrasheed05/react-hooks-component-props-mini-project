import React from "react";

function Header({name}){
//here were passing name as a parameter from the BLog.js
    return(
    <header>
     <h1>{name}</h1> 
    </header>
    );
}
export default Header