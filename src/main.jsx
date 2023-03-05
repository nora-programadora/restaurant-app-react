import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './components/error-page';
import App from './App';
import Home from './components/Home'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> ,
    errorElement: <ErrorPage/>
  },
  {
    path: "/body",
    element: <Body /> ,
    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
)
