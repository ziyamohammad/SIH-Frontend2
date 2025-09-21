import React from 'react'
import Main from './Main'
import Main2 from './Main2'
import Page3 from './Page3'
import Workflow from './Workflow'
import Testimonials from './Testimonials'

const Fullpage = () => {
  return (
    <div className='fullpage'>
       <Main/>
       <Main2/>
       <Page3/>
       <Workflow/>
       <Testimonials/>
    </div>
  )
}

export default Fullpage
