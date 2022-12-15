import React from 'react'

export class StateClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            profile: {
                name: "mantu",
                age: 30,
                job: "reactjs developer",
                ismarried: false
            }
        }
    }

    render() {
        const { counter, profile: { name, age, job, ismarried } } = this.state
        return (
            <>
                {/* <p>{this.state.counter}</p> */}
                <p>{counter}</p>
                <h5>i am {name} and i am {age} years old, currently i am a {job} ,{ismarried ? "married" : "unmarried"} guy</h5>
                <h1>Stateclass Component</h1>
                <button onClick={() => this.setState({
                    ...this.state,
                    counter: counter + 1,


                })}>click me</button>
            </>
        )
    }
}
export default StateClass