import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../navigator/Sidebar";
import PropTypes from "prop-types";

function TopSidebarLayout({ children }) {
  const sidebarWidth = "250px";
  return (
    <Flex h="100vh" minH="100vh" w="100vw" position="relative">
      <Box h="100%" w={sidebarWidth} position="fixed" left="0px">
        <Sidebar />
      </Box>
      <Box h="100%" w={`calc(100% - ${sidebarWidth})`} ml={sidebarWidth}>
        {children}
      </Box>
    </Flex>
  );
}

TopSidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TopSidebarLayout;
