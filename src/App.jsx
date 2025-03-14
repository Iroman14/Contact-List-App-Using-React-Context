import './index.css';
import injectContext from "./Store/context.jsx";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

function App() {
  return <RouterProvider router={router} />;
}

export default injectContext(App);