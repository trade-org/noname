import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import Buttons from "./ButtonComponent";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsFillPhoneVibrateFill } from "react-icons/bs";
const LoginModal = ({ showModal, closeModal }) => {
  return (
    <>
      <Box
        position={"fixed"}
        w={"100%"}
        h={"100%"}
        top={"0px"}
        left={"0px"}
        backdropBlur={"lg"}
        display={showModal ? "flex" : "none"}
        justifyContent={"center"}
        placeItems={"center"}
        background={"   rgba(0, 0, 0, 0.6)"}
        zIndex={10}
        backdropFilter={"blur(5px)"}
      >
        <Flex
          direction={"column"}
          background={"#181919"}
          w={"90vw"}
          textAlign={"center"}
          justifyContent={"center"}
          placeItems={"center"}
          position={"relative"}
          maxW={"450px"}
          padding={"30px"}
          borderRadius={"10px"}
        >
          <Flex align={"center"} justify={"space-between"} w={"100%"}>
            {/* <Text fontSize={"1.5rem"} onClick={() => setShowModal(true)}>
              Add Project
            </Text> */}
            <Button
              bg={"blue.600"}
              _hover={{
                backgroundColor: "rgba(#181819, 0.2)",
              }}
              size={"sm"}
              cursor={"pointer"}
              onClick={() => closeModal()}
            >
              <MdOutlineClose />
            </Button>
            <Text fontSize={"20px"}>Login to your account</Text>
          </Flex>
          <Flex
            direction={"column"}
            gap={"20px"}
            // w={["300px", "400px"]}
            mt={"50px"}
          >
            <Buttons icon={<FcGoogle />} name={"Login with Google"} />
            <Buttons icon={<BsFacebook />} name={"Login with Facebook"} />
            <Buttons
              icon={<BsFillPhoneVibrateFill />}
              name={"Login with Phonenumber"}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default LoginModal;
