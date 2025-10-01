import './index.css'
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ContactUs from "./Component/ContactUs.jsx";
import About from "./Component/About.jsx";
import Home from "./Component/Home.jsx";
import Ngo from './Component/NGO/Ngo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "ngo-registion",
        element: <div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold"><Ngo/></h1></div>,
      },
      {
        path: "section",
        element: <div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold">SECTION 8 Page - Coming Soon!</h1></div>,
      },
      {
        path: "trust",
        element: <div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold">Trust Page - Coming Soon!</h1></div>,
      },
      {
        path: "gst-registion",
        element: <div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold">GST Registration Page - Coming Soon!</h1></div>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

