import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
// import "../../../../components/utilityBold.css";
import CountUp from "react-countup";

const TurnoverBanner = () => {
  const textStyle = {
    color: "#290F44",
    maxW: ["200px", "220px"],
    w: ["100px", "200px"],
    fontSize: [".8em", "1em"],
    fontWeight: "semibold"
  };
  return (
    // <Stack
    //   direction={["column", "row"]}
    //   alignItems="center"
    //   justifyContent="space-between"
    //   padding={["", "3rem 8rem"]}
    //   bg="transparent linear-gradient(103deg, #E4F3F6 0%, #EDECFA 100%) 0% 0% no-repeat padding-box;"
    // >
    <Stack
      justifyContent={"center"}
      alignItems="center"
      bg="transparent linear-gradient(103deg, #E4F3F6 0%, #EDECFA 100%) 0% 0% no-repeat padding-box;"
    >
      <SimpleGrid
        className="reveal"
        w="100%"
        justifyContent={["space-around", "space-around"]}
        justifyItems="flex-end"
        //   alignItems="center"
        padding={["1rem 5rem", "3rem 1rem"]}
        columns={[2, 3, 3, 4]}
        spacing={10}
      >
        <Box data-aos="fade-up">
          <Heading
            marginBottom=".8rem"
            fontSize={["2em", "3rem"]}
            color="#290F44"
            className="bold"
          >
            <CountUp start={0} end={30} duration={2.75} enableScrollSpy />
          </Heading>

          {/* <Heading
            marginBottom=".8rem"
            fontSize={["2em", "3rem"]}
            color="#290F44"
            className="bold"
          >
            25+
          </Heading> */}
          <Text {...textStyle}>
            Employees Working Together to Deliver Quality Services
          </Text>
        </Box>
        <Box data-aos="fade-up">
          <Heading
            marginBottom=".8rem"
            fontSize={["2em", "3rem"]}
            color="#290F44"
            className="bold"
          >
            <CountUp start={0} end={1000} duration={2} enableScrollSpy />
          </Heading>
          <Text {...textStyle}>Happy Clients Around the World</Text>
        </Box>
        <Box data-aos="fade-up">
          <Heading
            marginBottom=".8rem"
            fontSize={["2em", "3rem"]}
            color="#290F44"
            className="bold"
          >
            <CountUp start={0} end={120} duration={2} enableScrollSpy />
          </Heading>
          <Text {...textStyle}>Projects Completed</Text>
        </Box>
        <Box data-aos="fade-up">
          <Heading
            marginBottom=".8rem"
            fontSize={["2em", "3rem"]}
            color="#290F44"
            className="bold"
          >
            <CountUp start={0} end={20} duration={2} enableScrollSpy />
          </Heading>
          <Text {...textStyle}>Cities Covered</Text>
        </Box>
      </SimpleGrid>
    </Stack>

    // {/* </Stack> */}
  );
};

export default TurnoverBanner;
