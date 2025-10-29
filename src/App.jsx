import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'


export const Component = (props) => {
  return(
    <div>
      {props.children}
    </div>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Footer></Footer>
    </>
  )
}

export default App
