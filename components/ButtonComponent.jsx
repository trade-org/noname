import { Text, Button, Box, Flex } from "@chakra-ui/react";
import React from "react";

const ButtonComponent = ({ name, icon, onClick }) => {
  return (
    <Button
      border={"none"}
      bg={"blue.600"}
      size="md"
      variant="outline"
      color={"white"}
      _hover={{
        bg: "white",
        color: "blue.600",
      }}
      onClick={onClick}
    >
      <Flex gap={"10px"} alignItems={"center"}>
        <Box fontSize={"20px"}>{icon}</Box>
        <Text fontSize={"20px"}>{name}</Text>
      </Flex>
    </Button>
  );
};

export default ButtonComponent;
