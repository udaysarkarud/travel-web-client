import { createBrowserRouter } from "react-router-dom";

import About from "../pages/About/About";
import Destination from "../pages/Destination/Destination";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "destination",
        element: <Destination />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;