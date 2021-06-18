import React from "react";

function Article({title, date = "January 1, 1970", preview, minutes}) {
    return(
        <>
        <h3>{title}</h3>
        <small>{date}</small>
        <em>    {minutes} mins read</em>
        <p>{preview}</p>
        
        </>
    )
}

export default Article;