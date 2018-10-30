import React from 'react';
import classes from './Person.css';
import Aux from '../../../HOC/Aux';
import withClass from '../../../HOC/withClass';
import PropTypes from 'prop-types';
const person = (props) => {
    return (
        <Aux>
            <p onClick={props.click}>I am {props.name}, and I am a {props.designation} </p>
            <p style={{color: 'red', fontFamily: 'courier', fontSize: 10}}>{props.children }</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </Aux>  
    ) 
};

person.propTypes = {
    click: PropTypes.func,
    designation: PropTypes.string,
    name: PropTypes.string,
    changed: PropTypes.func
}

export default withClass(person, classes.Person);