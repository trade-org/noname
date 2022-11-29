import { Text, Button } from "@chakra-ui/react";
import React from "react";

const Button = ({ name }) => {
  return (
    <Button
      fontSize="30px"
      colorScheme="green"
      size="md"
      variant="outline"
      color={"white"}
    >
      <Text>{name}</Text>
    </Button>
  );
};

export default Button;
