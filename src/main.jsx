import React from 'react'
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import './index.css'
import Store from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import AuthProtection from './components/AuthProtection.jsx'
import GptSearch from './components/GptSearch.jsx'
import IndiMoviepage from './components/IndiMoviepage.jsx'
import SearchPage from './components/SearchPage.jsx'

const route = createBrowserRouter([

{
  path: "/",
  element: <App/>,

  children : [
  {
    path:"/",
    element:<AuthProtection  Authentication={true}>
      <Home/>
    </AuthProtection>,

  }, 
  {
    path: "/login",
    element:<AuthProtection  Authentication={false}>
    <Login/>
  </AuthProtection>
  },
  {
    path: "/signup",
    element: <AuthProtection  Authentication={false}>
    <Signup/>
  </AuthProtection>
  },
  {
    path: "/GptSearch",
    element:<AuthProtection Authentication={true}>
      <GptSearch/>
    </AuthProtection>
  },
  {
    path: "/IndiMoviepage/:movieId",
    element:<AuthProtection Authentication={true}>
<IndiMoviepage/>
    </AuthProtection>
    
  },
  {
    path: "/search",
    element:<AuthProtection Authentication={true}>
<SearchPage/>
    </AuthProtection>
    
  },
  

]
}
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
<RouterProvider router={route}>
 <App/>
  
</RouterProvider>
    </Provider>
  </React.StrictMode>
)