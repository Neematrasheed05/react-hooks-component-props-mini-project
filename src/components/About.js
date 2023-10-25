import React from "react";
import logo from "../assets/logo";

function About(props){
    const { about, image = logo , alt = "blog logo"} = props;
    return(
    <aside>
        <img src={image || "https://via.placeholder.com/215"} alt={alt}/>
        <p>{about}</p>
        
    </aside>
    );
}
export default About;
