import React, { useState } from 'react'

function StateInfc() {
    const [counter, setCounter] = useState(0)
    const [profile, setProfile] = useState({
        name: "mantu",
        age: 30,
        job: "reactjs developer",
        ismarried: false
    })
    const { name, age, ismarried, job } = profile
    return (

        <>
            <p>{counter}</p>
            <h5>i am {name} and i am {age} years old, currently i am a {job} ,{ismarried ? "married" : "unmarried"} guy</h5>
            <h1>State functionalcoponent </h1>
            <button onClick={() => {
                setCounter(counter + 1)
                setProfile({
                    ...profile,
                    ismarried: !ismarried,
                    age:age+1
                })
            }}>clickme</button>
        </>
    )
}
export default StateInfc