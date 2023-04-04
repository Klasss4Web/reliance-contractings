import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import "../App.css";
import { Zoom } from "react-reveal";

const WhoWeAre = () => {
  return (
    <Box p={["80px"]}>
      <Flex width="100%" justifyContent="space-between">
        <Box width={["45%"]} className="reveal">
          <ul className="container">
            <li className="backwards">A</li>
            <li className="backwards">b</li>
            <li className="backwards">o</li>
            <li className="backwards">u</li>
            <li className="backwards">t</li>
            <li className="backwards">U</li>
            <li className="backwards">s</li>
          </ul>
          <Heading as="h2" mt="-20px">
            About Us
          </Heading>
          <Heading as="h4" fontSize="24px" color="#00000090">
            We are a group of professionals with a mandate to deliver quality
            services to our esteemed clients
          </Heading>
        </Box>
        <Box width={["45%"]} className="reveal">
          <Zoom>
            <Text fontSize="18px" fontWeight="semibold" color="grey">
              At our core, we are a service-oriented company, and we believe
              that our success is directly tied to the satisfaction of our
              clients. Whether you are in need of a minor repair or a major
              renovation, we have the expertise and resources to get the job
              done right. Our team of skilled craftsmen takes pride in their
              work, and they are committed to delivering exceptional results
              that will stand the test of time.
            </Text>
          </Zoom>
        </Box>
      </Flex>
    </Box>
  );
};

export default WhoWeAre;
