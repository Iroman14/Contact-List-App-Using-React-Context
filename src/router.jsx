import { createBrowserRouter } from "react-router-dom";
import AddContact from "./Views/AddContact";
import Contact from "./Views/Contact";
import EditContact from "./Views/EditContact";

const router = createBrowserRouter([
  { path: "/", element: <Contact /> },
  { path: "/AddContact", element: <AddContact /> },
  { path: "/EditContact/:id", element: <EditContact /> },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true, 
  },
});

export default router;