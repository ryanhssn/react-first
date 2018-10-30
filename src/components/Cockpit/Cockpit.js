import React from 'react';
import Aux from '../../HOC/Aux';
const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  
  }

const cockpit = (props) => {
    return (
       <Aux>
             <h1>I am React App!</h1>
                <button
                style={style} 
                onClick={props.togglePersons}>Switch Name</button>
        </Aux>    
       
    );
}

export default cockpit;