import { Route, Routes } from "react-router-dom";
import FullscreenPage from "../pages/FullscreenPage";
import TopSidebarPage from "../pages/TopSidebarPage";
import TopbarPage from "../pages/TopbarPage";
import SidebarPage from '../pages/SidebarPage'

function MainRouter() {
  const allRoutes = [
    { path: "/", element: <FullscreenPage /> },
    { path: "/topsidebar", element: <TopSidebarPage /> },
    { path: "/topbar", element: <TopbarPage /> },
    { path: '/sidebar', element: <SidebarPage />}

  ];
  return (
    <Routes>
      {allRoutes.map((link, index) => {
        return <Route key={index} path={link.path} element={link.element} />;
      })}
    </Routes>
  );
}

export default MainRouter;
