import React from 'react'

const UseEffect = () => {
    const [state, setState] = React.useState({
        name: "mantu"
    })
    React.useEffect(() => {
        console.log("from useeffect mounting")
    }, [state])
    console.log('before return')
    return (
        <div onClick={() => setState({
            ...state,
            name: "dash"
        })}>
            {console.log('inside return')}
            I am {state.name}
        </div>
    )
}

export default UseEffect
