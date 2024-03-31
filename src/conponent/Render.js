import React from 'react'

import { useState } from 'react';
import Rendered from './Rendered';



const Render = () => {
    const [first, setfirst] = useState(false) 

    const rdr = () => {
        setfirst (!first)
    }

  return (
    <div>
    <Rendered />
   <h1>this is my component</h1>
   <button onClick={rdr}>Render</button>

   {

    first === true ? <Rendered /> : <h1>click button to render</h1>

   }
    </div>
  )
}

export default Render