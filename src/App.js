import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons: [
      {id: 1, name: "Bilal H", designation: "Software Developer"},
      {id: 2, name: "Armaan I", designation: "Web Developer"},
      {id: 3, name: "Ryan H", designation: "React Native Developer"}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
  
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons
    })
}

  deleteHandler = (index) => {
    //const persons = this.state.persons; //bad approach
    //const persons = this.state.persons.slice(); //can be use
    const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({persons})
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    
    }

    return (
  
      <div className={classes.App}>
        <h1>I am React App!</h1>
        <button
          style={style} 
          onClick={this.togglePersons}>Switch Name</button>
        {
          this.state.showPersons ?
            this.state.persons.map((person, index) => 
            <ErrorBoundary key={person.id}>
            <Person 
              name={person.name} 
              designation={person.designation} 
              
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deleteHandler(index)} />
              </ErrorBoundary>
             )
          : null
            
        }
        
      </div>
    
    );
  }
}

export default App;
