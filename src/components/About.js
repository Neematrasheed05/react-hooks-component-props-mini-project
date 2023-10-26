import React from "react";
import logo from "../assets/logo";

function About({image, about}){
    console.log(image, about)
    return(
    <aside>
        <img src={image || "https://via.placeholder.com/215"} alt="blog logo"/>
        <p>{about}</p>
        
    </aside>
    );
}
export default About;
