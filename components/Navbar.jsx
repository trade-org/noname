import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <Flex justify={"space-between"} p={"25px"} px={"50px"}>
        <Text fontSize={"30px"}>Comerc</Text>

        <Box>
          <Input w={"500px"} type="text" placeholder="Search Users" />
        </Box>
        <Flex gap={"20px"}>
          <Button name={"Log In"} />
          <Button name={"Start Selling"} />
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
