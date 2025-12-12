
import { RouteObject } from "react-router-dom";
import HomePage from "../pages/home/page";
import ProjectsPage from "../pages/projects/page";
import ServicesPage from "../pages/services/page";
import NotFound from "../pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/services", 
    element: <ServicesPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
