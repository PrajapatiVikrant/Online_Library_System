import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Browse_Book from './pages/Browse_book.jsx'
import { Provider } from 'react-redux'
import Store from './State/Store.js'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/browse_book",
        element:<Browse_Book/>

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>

   <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>,
)
