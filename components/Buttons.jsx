import { Text, Button } from "@chakra-ui/react";
import React from "react";

const Buttons = ({ name }) => {
  return (
    <Button
      border={"none"}
      bg={"green"}
      size="md"
      variant="outline"
      color={"white"}
      _hover={{
        bg: "white",
        color: "green",
      }}
    >
      <Text>{name}</Text>
    </Button>
  );
};

export default Buttons;
