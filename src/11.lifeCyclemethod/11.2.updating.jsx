import React, { Component } from 'react'

export default class Updating extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "updating"
        }
        console.log("from constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("from getderivedstatefromprops")
        return null
    }
    shouldComponentUpdate() {
        console.log('from shouldcomponentupdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log("from getsnapshotforupdate")
        console.log(prevProp, prevState)
        return null
    }
    componentDidUpdate(prevProp,prevState,snapshot){
        console.log('from componentdidupdate')
        console.log(prevProp,prevState,snapshot)
        return null
    }

    render() {
        const { name } = this.state
        console.log("from render")

        return (
            <div onClick ={()=>this.setState({
                ...this.state,
                name: "Hello"
            })}>
                Hello {name}
            </div>
        )
    }
}
