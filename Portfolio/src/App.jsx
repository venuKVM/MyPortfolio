
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/navbar'
import Projects from './components/Projects'
import { RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {path:'/', element:<Navbar/>,
    children:[
      {index:true, element:<Home/>},
      {path:'projects', element:<Projects/>},
      {path: 'AboutMe', element:<AboutMe/>},
      {path:'contact', element:<Contact/>},

    ]
  },
])

function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
