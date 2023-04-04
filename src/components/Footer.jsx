import { Box, Flex, Image, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";

import logo from "../assets/logo.png";

function scrollToTop() {
  window.scroll(0, 0)
}

const Footer = () => {
  return (
    <Flex
      className="reveal"
      width="100%"
      flexDirection={["column", "column", "column", "row"]}
      bg="#033E3E"
      justify={"space-between"}
      align="center"
      px={["20px", "20px", "30px"]}
      py={["10px", "10px", "45px"]}
      borderTopRadius="50px"
      mt={["0px", "0px", "20px", "10px"]}
    >
      <Box width={["100%", "100%", "25%"]} align="center" cursor={"pointer"} mb={["-30px", "-30px", "0px"]}>
        <Image loading="lazy" src={logo} alt="logo" onClick={scrollToTop} />
      </Box>

      <Flex
        width={["100%", "100%", "60%", "35%"]}
        justify={"space-between"}
        flexDirection={["column", "column", "row"]}
        color="#FFFFFF"
        align="center"
        fontSize={["16px", "16px", "18px"]}
        fontWeight={"semibold"}
      >
        <a href="#who-we-are">
          <Text>Who We Are</Text>
        </a>
        <a href="#features">
          <Text>Features</Text>
        </a>
        <a href="#pricing">
          <Text>Pricing</Text>
        </a>
        <a href="#faq">
          <Text>FAQ</Text>
        </a>
      </Flex>
      <VStack
        width={["100%", "100%", "100%", "20%"]}
        spacing={["0px", "0px", "15px", "25px"]}
      >
        <Text color="#FFFFFF" mb={["20px", "20px", "0px"]}>
          Sign up for updates & newsletters
        </Text>
        <Input
          placeholder="Enter Email Address"
          color="#000"
          bg="#FCFBFB"
          borderRadius={"10px"}
          _placeholder={{ color: "gray" }}
        />
      </VStack>
    </Flex>
  );
};

export default Footer;
