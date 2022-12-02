import { Box, Flex, Img, Text, Image } from "@chakra-ui/react";
import React from "react";
import image from "../assets/image.jpg";
const MainSection = () => {
  return (
    <>
      <Flex justify={"space-between"} mt={"50px"} px={"100px"}>
        <Box w={"600px"}>
          {/* <Img src={image} /> */}
          <Image
            src="https://assets.jiji.ng/static/img/main-page/man.png"
            w={"110vh"}
          />
        </Box>
        <Flex direction={"column"} mt={"70px"} w={"600px"}>
          <Text fontSize={"40px"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            eligendi.
          </Text>
          <Text mt={"20px"} fontSize={"20px"}>
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
