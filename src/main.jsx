//SUMMARY:
//LAYOUT.JSX AND OUTLET
//ROUTEPROVIDER(A WRAPPER), CREATING ROUTER(2 WAYS), NESTED ROUTES
//DYNAMIC VALUES FROM URL, EXTRACTED THESE THROUGH USEPARAMS IN  USER COMPONENT
//OPTIMISATION WHERE API CALLS THROUGH LOADER


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Layout from "./Layout.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
//RouterBrowser always accepts a router, one way to create router is this:

// slash '/' is top level route and what it should render? 'Layout' component
//since there are additional nested routes that's why we add children as well

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       {path:"contact",element:<Contact/>}
//     ],
//   },
// ]);

//ANOTHER WAY TO CREATE A ROUTER

//ALSO THERE'S THIS NEW CONCEPT OF LOADER, WHICH IS USED WHEN WE WANNA DO SOME API FETCHING IN SOME COMPONENT, IT ENABLES US TO FETCH DATA EVEN BEFORE USEEFFECT AND WHEN WE TAKE OUR MOUSE TO GITHUB IN NAVBAR OR CLICK ON LET'S SAY GITHUB, IT HAD ALREADY FETCHED DATA FROM API AND KEEP THAT IN CACHE ALSO.IT IS A VERY OPTIMISED WAY.
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      {/* Creating a route of type /user/id where userid can be 1,2,3 etc and data should change dynamically through id, here we rendered the element User.jsx that means that component has access to the userid  */}
      <Route path="user/:userid" element={<User/>}/> 
      <Route
       loader={githubInfoLoader}
      path="github" 
      element={<Github/>}/> 
  </Route>)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
