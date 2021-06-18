import React from "react";

function About({pic = "https://via.placeholder.com/215", altAtt, about}) {
    return(
    <aside>
    <img src={pic} alt={altAtt}></img>
    <p>{about}</p>
    </aside>)
}

export default About;