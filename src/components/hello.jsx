import React from "react";

const Hello = (props) => {
    console.log('propiedades', props)
    return (
        <>
        <div>Hello</div>
        <p>My name is {props.name}</p>
        </>
    )
}

export default Hello;