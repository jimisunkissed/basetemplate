import { Box, Flex } from "@chakra-ui/react";
import Topbar from "../navigator/Topbar";
import Sidebar from "../navigator/Sidebar";
import PropTypes from "prop-types";

function TopSidebarLayout({ children }) {
  const topbarHeight = "80px";
  const sidebarWidth = "250px";
  return (
    <Flex
      flexDirection="column"
      h="100vh"
      minH="100vh"
      w="100vw"
      position="relative"
    >
      <Box h={topbarHeight} w="100%" position="fixed" top="0px" zIndex="1">
        <Topbar />
      </Box>
      <Flex h={`calc(100vh - ${topbarHeight})`} w="100%" mt={topbarHeight}>
        <Box
          h={`calc(100vh - ${topbarHeight})`}
          w={sidebarWidth}
          position="fixed"
          left="0px"
        >
          <Sidebar />
        </Box>
        <Box h="100%" w={`calc(100% - ${sidebarWidth})`} ml={sidebarWidth}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}

TopSidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TopSidebarLayout;
