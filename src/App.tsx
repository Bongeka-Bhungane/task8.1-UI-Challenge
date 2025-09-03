import { useState } from 'react'
import './App.css'
import Text from './componants/Text/text'
import {Navbar} from './componants/Navbar/navbar'

function App() {

  return (
    <>
    <Navbar />
    <Text variant='h1' style={{color: 'blue', textAlign: 'center'}}>Hello World</Text>
    <Text variant='h2' style={{color: 'red', textAlign: 'center'}}>Hello World</Text>
    <Text variant='p' style={{color: 'green', textAlign: 'center'}}>Hello World</Text>
    <Text variant='span' style={{color: 'purple', textAlign: 'center'}}>Hello World</Text>
    <Text style={{color: 'orange', textAlign: 'center'}}>Hello World</Text>
    </>
  )
}

export default App
