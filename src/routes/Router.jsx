import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses"; 

function Layout() {
  return (
    <>
      {/* <Home /> */}
      <Outlet />
      <Courses />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "Courses", element: <Courses /> },
    //   { path: "contact", element: <Contact /> },
    //   { path: "Pages", element: <Pages /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;