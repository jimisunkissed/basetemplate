import { useLocation } from "react-router-dom";
import FullscreenLayout from "./FullscreenLayout";
import TopSidebarLayout from "./TopSidebarLayout";
import TopbarLayout from "./TopbarLayout";
import SidebarLayout from "./SidebarLayout";
import Background from "../background/Background";
import PropTypes from "prop-types";

function MotherLayout({ children }) {
  const location = useLocation();
  const fullscreenPath = ["/"];
  const topsidebarPath = ["/topsidebar"];
  const topbarPath = ["/topbar"];

  return (
    <>
      {fullscreenPath.includes(location.pathname) ? (
        <FullscreenLayout>{children}</FullscreenLayout>
      ) : topsidebarPath.includes(location.pathname) ? (
        <TopSidebarLayout>{children}</TopSidebarLayout>
      ) : topbarPath.includes(location.pathname) ? (
        <TopbarLayout>{children}</TopbarLayout>
      ) : (
        <SidebarLayout>{children}</SidebarLayout>
      )}
      <Background />
    </>
  );
}

MotherLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MotherLayout;
