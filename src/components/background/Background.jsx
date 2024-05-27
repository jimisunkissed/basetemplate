import { Box } from "@chakra-ui/react";

function Background() {
  return (
    <>
      <Box
        h="100vh"
        w="100vw"
        bg="gray.300"
        position="fixed"
        top="0px"
        zIndex="-1"
      />
    </>
  );
}

export default Background;
