import React from 'react';
import './Person.css';

const person = (props) => {
    

    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name}, and I am a {props.designation} </p>
            <p style={{color: 'red', fontFamily: 'courier', fontSize: 10}}>{props.children }</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>  
    ) 
};

export default person;