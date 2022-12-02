import { Box, Flex, Img, Text, Image, Center } from "@chakra-ui/react";
import React from "react";
import image from "../assets/image.jpg";
import AdvertData from "./AdvertData";
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
      <Center mt={"70px"} fontSize={"50px"}>
        Trending Ads{" "}
      </Center>
      <Flex justify={"center"} wrap={"wrap"} gap={"20px"}>
        {AdvertData.map(({ imagelink, price, name }) => (
          <Box
            bg={"#1c1c1c"}
            cursor="pointer"
            borderRadius={"md"}
            my={"20px"}
            w={"300px"}
          >
            <Box fontSize={"30px"} fontWeight={600}>
              <Box
                h={"200px"}
                w={"100%"}
                backgroundImage={imagelink}
                backgroundSize={"cover"}
              >
                {/* <Image src={imagelink} /> */}
              </Box>
              <Box p={"30px"}>
                <Text mt={"5px"}>{name}</Text>
                <Text mt={"5px"} color={"green"}>
                  {price}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default MainSection;
