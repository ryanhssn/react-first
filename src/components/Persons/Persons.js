import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Bilal'
        }
        console.info("Constructor fired")
    }

    componentWillMount() {
        console.info("componentWillMount fired")
    }

    componentDidMount() {
        this.setState({
            name: 'Ryanhssn'
        })
        console.info("componentDidMount fired")
    }
    
    componentWillReceiveProps = (nextProps) => {
        console.log("[upadte persons.js] inside componentWillReceiveProps", nextProps)
    }

    // shouldComponentUpdate(nextProps, nextState) {
        
    //     console.log("inside = shouldComponentUpdate() ", nextProps, nextState)
    //     return nextProps.persons !== this.props.persons
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log("inside = componentWillUpdate() ", nextProps, nextState)
    }

    componentDidUpdate() {
        console.log("inside = componentDidUpdate() ")
   
    }

    render() {
        console.log("Persons.js -> inside render function")
        return (
            this.props.persons.map((person, index) => {
                return <Person 
                name={person.name} 
                designation={person.designation} 
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
                click={() => this.props.clicked(index)} />
    }
        )
    )
    }
} 

export default Persons;