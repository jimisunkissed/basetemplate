import { Box, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Topbar from "../navigator/Topbar";

function TopbarLayout({ children }) {
  const topbarHeight = "80px";
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
      <Box h={`calc(100% - ${topbarHeight})`} w="100%" mt={topbarHeight}>
        {children}
      </Box>
    </Flex>
  );
}

TopbarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TopbarLayout;
