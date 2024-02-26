import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Descpage from "./pages/Descpage.jsx";
import Homepage from "./pages/Homepage.jsx";
import Navbar from "./components/Navbar.jsx";
import Feedbackform from "./pages/Feedbackform.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/desc/:id",
        element: <Descpage />,
      },
      {
        path: "/feedbackform",
        element: <Feedbackform />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
