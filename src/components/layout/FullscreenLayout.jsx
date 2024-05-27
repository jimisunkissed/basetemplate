import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

function FullscreenLayout({ children }) {
  return (
    <Box h="100vh" minH="100vh" w="100vw" position="relative">
      {children}
    </Box>
  );
}

FullscreenLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default FullscreenLayout;
