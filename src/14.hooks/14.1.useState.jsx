import React from 'react'

const Usestate = () => {
  const [state,setState]=React.useState({
    name:"mantu"
  })
  console.log('before return')
  return (
    <div onClick={()=>setState({
      ...state,
      name:"dash"
    })}>
      {console.log('inside return')}
      I am {state.name}
    </div>
  )
}

export default Usestate
