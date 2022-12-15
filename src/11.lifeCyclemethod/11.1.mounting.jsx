import React from 'react'

class Mounting extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "mantu"
        }
        console.log("I m from constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log(state)
        console.log("I m getderivedfromprops")
        return {
            name: "K soft"
        }
    }


    componentDidMount() {
        console.log("i m compomentdidmount")

    }

    render() {
        console.log("i m from render")
        return <h1>Hello World {this.state.name}</h1>
    }

}

export default Mounting;
