import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import Hub from "./pages/Hub";
import Notes from "./pages/Notes";
import Weather from "./pages/Weather";
import NotFound from "./pages/NotFound";
import Timer from "./pages/Timer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hub />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/Notes",
        element: <Notes />,
      },
      {
        path: "/Weather",
        element: <Weather />,
      },
      {
        path: "/Timer",
        element: <Timer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*delete StrictMode for localStorage work*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);
