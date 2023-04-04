import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdClear, MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
// import "../App.css";

function Nav() {
  const [showMenu, setShowMenu] = useState(null);
  const menuOpen = useBreakpointValue([false, false, true, true]);

  useEffect(() => {
    setShowMenu(menuOpen);
  }, [menuOpen]);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <Flex
      className="gradient"
      bg="linear-gradient(217deg, #E6C16A, #FFFFFF 93.71%), linear-gradient(7deg, #CE9F56, #FFFFFF 70.71%), linear-gradient(217deg, #B67D43, #FFFFFF 70.71%);"
      w={"100%"}
      position={"fixed"}
      zIndex={1}
      direction={["column", "column", "row", "row"]}
      align={"center"}
      justifyContent={["space-between"]}
      p={["20px 0px", "20px 20px", "40px 20px", "15px 40px"]}
      fontFamily={"Trenda-regular"}
    >
      <Flex w={["100%", "100%", "10%", "20%"]} align={["flex-start"]}>
        <Link to="/">
          <Image
            w={["80px"]}
            src={logo}
            //mt="-15px"
            alt="logo"
            loading="lazy"
            onClick={scrollToTop}
          />
        </Link>
      </Flex>
      <Box>
        <Stack
          w={"100%"}
          fontWeight={"bold"}
          fontSize="1.15em"
          direction={["column", "column", "row", "row"]}
          alignItems="center"
          justifyContent={"space-between"}
          p={[null, null, "10px 10px", "20px 80px"]}
          fontFamily={"Trenda-regular"}
          display={showMenu ? "flex" : "none"}
          color={"#000606"}
        >
          <Text pr={["0px", "0px", "40px"]}>
            <a href="#who-we-are" className="hova">
              Who We Are
            </a>
          </Text>
          <Text pr={["0px", "0px", "40px"]}>
            <a href="#features" className="hova">
              Features
            </a>
          </Text>
          <Text pr={["0px", "0px", "40px"]}>
            <a href="#pricing" className="hova">
              Pricing
            </a>
          </Text>
          <Text pr={["0px", "0px", "40px"]}>
            <a href="#faq" className="hova">
              FAQ
            </a>
          </Text>
          <Button
            _hover={{ background: "#033E3E" }}
            fontSize={".9em"}
            bg="#033E3E"
            color="#fff"
            p="10px 30px"
            display={["block", "block", "none", "none"]}
          >
            Get Started
          </Button>
        </Stack>
      </Box>
      <Box>
        <Stack direction={"row"} alignItems="center">
          <Button
            _hover={{ background: "#033E3E" }}
            fontSize={".9em"}
            bg="#033E3E"
            color="#fff"
            p="10px 30px"
            display={["none", "none", "block", "block"]}
          >
            Contact Us
          </Button>
        </Stack>
      </Box>
      <Box
        position={"absolute"}
        right={"20px"}
        top={"30px"}
        display={["block", "block", "none", "none"]}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <MdClear size="1.8rem" /> : <MdMenu size="2.5rem" />}
      </Box>
    </Flex>
  );
}

export default Nav;
