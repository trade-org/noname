import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import image from "../assets/image.jpg";
const MainSection = () => {
  return (
    <>
      <Flex>
        <Box>
          <Img src={image} />
        </Box>
        <Flex direction={"column"}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            eligendi.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            consequatur itaque fuga nam totam harum cum dolores accusamus iusto
            fugit!
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default MainSection;
