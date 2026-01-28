import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./home/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Blog from "./Blog/Blog";
import BlogDetails from "./BlogDetails/BlogDetails";
import Notfound from "./Notfound/Notfound";


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "/", element: <Home></Home> },
        {path:"blog", element:<Blog></Blog>},
        {path:"blog/:id", element:<BlogDetails></BlogDetails>},
        {path:"blog/category/:category", element:<Blog></Blog>},
        {path :"*",element:<Notfound></Notfound>},

      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
