import React from 'react'
import CssInJs from './01.addingCss/1.1.cssInJs'
import InlineCss from './01.addingCss/1.2.inline'
import ModularCss from './01.addingCss/1.3.modular'
import ExtranalCss from './01.addingCss/1.4.extranal'
import ClassComponents from './03.creatingComponents/3.1.Classcomopnent'
import Functional from './03.creatingComponents/3.2.functionalcoponent'
import { StateClass } from './04.state/4.1.stateIncc'
import StateInfc from './04.state/4.2.stateInfc'
import propsComponent from './05.props/introtoprops'
import PropComp from './05.props/introtoprops'
import Usingxhr from './16.dataFetching/16.1.usingxhr'
import {Mounting} from './11.lifeCyclemethod'
import Updating from './11.lifeCyclemethod/11.2.updating'
import Usestate from './14.hooks/14.1.useState'
import UseEffect from './14.hooks/14.2.useEffect'
const Lazyloading= React.lazy(()=>import("./28.lazyLoading"))

function App() {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      {/* <CssInJs /> */}
      {/* <InlineCss /> */}
      {/* {/* <ModularCss /> */}
      {/* <ExtranalCss /> */}
      {/* <Cards /> */}
      {/* <ClassComponents /> */}
      {/* <Functional /> */}
      {/* {/* <StateClass/> */}
      {/* <StateInfc/> */}
      {/* <PropComp/> */}
      {/* <Usingxhr/> */}
      {/* <Mounting/> */}
      {/* <Lazyloading/> */}
      {/* <Updating/> */}
      {/* <Usestate/> */}
      <UseEffect/>
      
    </React.Suspense>
  )
}

export default App
