import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <>
      <Flex
        justify={["center", "space-between"]}
        p={["0px", "25px"]}
        px={"80px"}
      >
        <Text fontSize={"30px"}>Comerc</Text>

        <Box>
          <Input
            w={["100px", "300px", "500px"]}
            type="text"
            placeholder="Search Users"
          />
        </Box>
        <Flex gap={["10px", "20px"]}>
          <Buttons name={"Log In"} />
          <Buttons name={"Start Selling"} />
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
