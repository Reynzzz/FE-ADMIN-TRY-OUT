import { useState } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={router}/>
     
    </>
  )
}

export default App
