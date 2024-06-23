import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="User/" element={<User />}>
        <Route path=":userId" element={<User />} />
      </Route>
      <Route 
      loader={githubInfoLoader}
      path="Github" 
      element={<Github />} />
      <Route path="*" element={<div>Not Found</div>}/>
    </Route>
  )
)
// Route is an element from react-router that takes the path and element to load i.e component as params
// Everything happening inside the first route element is after loading the slash
// In dynamic routing ':' is used. Here ':' is used to capture anything after user
// userId is a placeholder
// "*" is when error 404 appears. It should be placed at at sine it checks on a case by case basis 
// loader is a property which takes a method where whatever you nned to fetch or get is given for advance preprocessing

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
// router is a property and its value is the router variable that I made
