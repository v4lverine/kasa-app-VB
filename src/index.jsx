import * as React from "react";
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import Home from './pages/Homepage/Home.jsx';
import About from './pages/About_page/About.jsx';
import ErrorComponent from './pages/404/Error.jsx';
import Lodging from './pages/Lodging_form/Lodging.jsx';
import { singleLodgingLoader } from "./routes/singleLodging";
import { lodgingsLoader } from "./routes/lodgings";
import Layout from "./components/Layout.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: '/a-propos',
        element: <About />,
      },
      {
        path: '/',
        element: <Home />,
        loader: lodgingsLoader,
      },
      {
        path: '/logement/:id',
        element: <Lodging />,
        loader: singleLodgingLoader,
      },
    ]
  },
  {
    path: '*',
    element: <ErrorComponent />,
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
