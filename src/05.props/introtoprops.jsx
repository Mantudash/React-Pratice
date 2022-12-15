import React from 'react'


function PropComp() {
    const mantu ="ksoft"
    return (
        <>
            <h1>Propscomponent</h1>
            <Prop1Comp />
        </>
    )
}
function Prop1Comp() {
    return (
        <>
            <h1>Propscomponent1</h1>
            <Prop2Comp />
        </>)
}
function Prop2Comp() {
    return (
        <>
            <h1>Propscomponent2</h1>
            <Prop3Comp />
        </>
    )
}
function Prop3Comp() {
    return (
        <>
            <h1>Propscomponent</h1>
        </>
    )
}

export default PropComp