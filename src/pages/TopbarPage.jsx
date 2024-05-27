import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function TopbarPage() {
  const navigate = useNavigate();
  return (
    <Flex
      flexDirection="column"
      h="100%"
      minH="100%"
      w="100%"
      align="center"
      justify="center"
      gap="10px"
    >
      <Button h="35px" w="120px" onClick={() => navigate("/")}>
        Fullscreen
      </Button>
      <Button h="35px" w="120px" onClick={() => navigate("/topsidebar")}>
        TopSidebar
      </Button>
      <Button h="35px" w="120px" onClick={() => navigate("/topbar")}>
        Topbar
      </Button>
      <Button h="35px" w="120px" onClick={() => navigate("/sidebar")}>
        Sidebar
      </Button>
    </Flex>
  );
}

export default TopbarPage;
