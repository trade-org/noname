import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import LoginModal from "./LoginModal";
import SignUp from "./SignUp";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
    setShowSignUpModal(false);
  };
  return (
    <>
      <LoginModal showModal={showModal} closeModal={closeModal} />
      <SignUp showSignUpModal={showSignUpModal} closeModal={closeModal} />
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
          <ButtonComponent
            onClick={() => setShowModal(!showModal)}
            name={"Log In"}
          />
          <ButtonComponent
            onClick={() => setShowSignUpModal(!showSignUpModal)}
            name={"Start Selling"}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
