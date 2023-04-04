import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const IndustriesWeServe = () => {
  return (
    <Box p={["80px"]}>
      <ul className="container">
        <li className="backwards">I</li>
        <li className="backwards">n</li>
        <li className="backwards">d</li>
        <li className="backwards">u</li>
        <li className="backwards">s</li>
        <li className="backwards">t</li>
        <li className="backwards">r</li>
        <li className="backwards">i</li>
        <li className="backwards">e</li>
        <li className="backwards">s</li>
        <li className="backwards"></li>
        <li className="backwards">W</li>
        <li className="backwards">e</li>
        <li className="backwards"></li>
        <li className="backwards">S</li>
        <li className="backwards">e</li>
        <li className="backwards">r</li>
        <li className="backwards">v</li>
        <li className="backwards">e</li>
      </ul>
      <Heading as="h2" mt="-20px">
        Industries We Service
      </Heading>
    </Box>
  );
};

export default IndustriesWeServe;
