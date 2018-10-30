import React, { PureComponent } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import withClass from '../HOC/withClass';
import Aux from '../HOC/Aux';


class App extends PureComponent {

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

   

    let allPersons = null;

    if (this.state.showPersons) {
      allPersons = 
          <Persons
            persons={this.state.persons}
            clicked={this.deleteHandler}
            changed={this.nameChangedHandler}
           />
       
    }

    return (
  
      <Aux>
        <Cockpit togglePersons={this.togglePersons} />
         {allPersons}
      </Aux>
    
    );
  }
}

export default withClass(App, classes.App);
