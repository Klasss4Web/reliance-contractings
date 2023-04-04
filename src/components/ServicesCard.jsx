import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import One from "../assets/domestic.jpg";
import Two from "../assets/hero-bg.jpg";
import Three from "../assets/hero.jpg";
import Four from "../assets/sanitizer.jpg";
import Five from "../assets/window.jpg";
import "./serviceCard.scss";
// import { useNavigate } from "react-router-dom";

const ServicesCards = () => {
  // const navigate = useNavigate();

  const scrollRight = () => {
    let obj = document.getElementById("review-scroll");
    obj.scrollBy(400, 0);
  };
  const scrollLeft = () => {
    let obj = document.getElementById("review-scroll");
    obj.scrollBy(-400, 0);
  };

  return (
    <>
      <Box width={["100%"]} className="reveal" px="90px" mt="80px">
        <ul className="container">
          <li className="backwards">O</li>
          <li className="backwards">u</li>
          <li className="backwards">r</li>
          <li className="backwards"></li>
          <li className="backwards">S</li>
          <li className="backwards">e</li>
          <li className="backwards">r</li>
          <li className="backwards">v</li>
          <li className="backwards">i</li>
          <li className="backwards">c</li>
          <li className="backwards">e</li>
          <li className="backwards">s</li>
        </ul>
        <Heading as="h2" mt="-20px">
          Our Services
        </Heading>
        <Heading as="h4" fontSize="20px" color="#00000090">
          We offer a range of professional services that cut accross different
          sector
        </Heading>
      </Box>
      <Flex
        gap="2rem"
        padding={["2rem 1rem", "2rem 6rem"]}
        overflowX="scroll"
        className="scroll reveal"
        id="review-scroll"
        scrollBehavior={"smooth"}
      >
        <Box
          data-aos="fade-right"
          flex="1"
          className="card"
          position="relative"
          backgroundImage={One}
          backgroundSize="cover"
          height="320px"
          minWidth="300px"
          borderRadius="15px"
        >
          <Box className="overlay" borderRadius="15px"></Box>
          <Box position="absolute" bottom="3%" left="5%">
            <Heading
              marginBottom=".7rem"
              fontSize="22px"
              fontWeight="700"
              color="#fff"
            >
              CLEANING <br /> SERVICES
            </Heading>
            <Box className="more">
              <Text marginBottom=".7rem" display="" color="#fff">
                We understand that each industry has unique cleaning
                requirements, which is why we offer customized cleaning plans
                tailored to your specific needs.
              </Text>
              <IconButton
                _hover={{ background: "#00FE98" }}
                colorScheme="purple"
                aria-label="Search database"
                height={7}
                icon={<AiOutlineArrowRight />}
                // onClick={() => navigate("/service/product-development")}
              />
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-right"
          flex="1"
          className="card"
          position="relative"
          backgroundImage={Two}
          backgroundSize="cover"
          height="320px"
          minWidth="300px"
          borderRadius="15px"
        >
          <Box className="overlay" borderRadius="15px"></Box>
          <Box position="absolute" bottom="3%" left="5%">
            <Heading
              marginBottom=".7rem"
              fontSize="22px"
              fontWeight="700"
              color="#fff"
            >
              STUDENTS <br /> ACCOMMODATION
            </Heading>
            <Box className="more">
              <Text marginBottom=".7rem" display="" color="#fff">
                We offer a variety of options for students accommodation to suit
                every budget, from shared apartments to private rooms, all
                located in close proximity to major universities and colleges.
              </Text>
              <IconButton
                _hover={{ background: "#00FE98" }}
                colorScheme="purple"
                aria-label="Search database"
                height={7}
                icon={<AiOutlineArrowRight />}
                // onClick={() => navigate("/service/ux-research")}
              />
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-right"
          flex="1"
          className="card"
          position="relative"
          backgroundImage={Three}
          backgroundSize="cover"
          height="320px"
          minWidth="300px"
          borderRadius="15px"
        >
          <Box className="overlay" borderRadius="15px"></Box>
          <Box position="absolute" bottom="3%" left="5%">
            <Heading
              marginBottom=".7rem"
              fontSize="22px"
              fontWeight="700"
              color="#fff"
            >
              THERAPIST <br /> CONSULTANTATIONS
            </Heading>
            <Box className="more">
              <Text marginBottom=".7rem" display="" color="#fff">
                Our therapist consultations service provides a safe and
                confidential space for individuals seeking mental health
                support. We offer a range of counseling services tailored to
                meet the unique needs of each clien
              </Text>
              <IconButton
                _hover={{ background: "#00FE98" }}
                colorScheme="purple"
                aria-label="Search database"
                height={7}
                icon={<AiOutlineArrowRight />}
                // onClick={() => navigate("/service/it-consultancy")}
              />
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-right"
          flex="1"
          className="card"
          position="relative"
          backgroundImage={Four}
          backgroundSize="cover"
          height="320px"
          minWidth="300px"
          borderRadius="15px"
        >
          <Box className="overlay" borderRadius="15px"></Box>
          <Box position="absolute" bottom="3%" left="5%">
            <Heading
              marginBottom=".7rem"
              fontSize="22px"
              fontWeight="700"
              color="#fff"
            >
              QUALITY <br /> ASSURANCE
            </Heading>
            <Box className="more">
              <Text marginBottom=".7rem" display="" color="#fff">
                Rethink your company's offering with a digital-first strategy,
                make procedures more efficient, and improve client experiences.
              </Text>
              <IconButton
                _hover={{ background: "#00FE98" }}
                colorScheme="purple"
                aria-label="Search database"
                height={7}
                icon={<AiOutlineArrowRight />}
                // onClick={() => navigate("/service/quality-assurance")}
              />
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-right"
          flex="1"
          className="card"
          position="relative"
          backgroundImage={Five}
          backgroundSize="cover"
          height="320px"
          minWidth="300px"
          borderRadius="15px"
        >
          <Box className="overlay" borderRadius="15px"></Box>
          <Box position="absolute" bottom="3%" left="5%">
            <Heading
              marginBottom=".7rem"
              fontSize="22px"
              fontWeight="700"
              color="#fff"
            >
              TALENT <br /> OUTSOURCING
            </Heading>
            <Box className="more">
              <Text marginBottom=".7rem" display="" color="#fff">
                Get well trained and experienced staff in the health care
                industry. We have a pool of quaified and vetted health
                professionals.
              </Text>
              <IconButton
                _hover={{ background: "#00FE98" }}
                colorScheme="purple"
                aria-label="Search database"
                height={7}
                icon={<AiOutlineArrowRight />}
                // onClick={() => navigate("/service/talent-outsourcing")}
              />
            </Box>
          </Box>
        </Box>
      </Flex>
      <Flex gap="20px" mb={1} mt={1} justifyContent="center">
        <AiOutlineArrowLeft
          fontSize="1.8rem"
          marginRight={4}
          onClick={scrollLeft}
          cursor="pointer"
        />
        <AiOutlineArrowRight
          fontSize="1.8rem"
          onClick={scrollRight}
          cursor="pointer"
        />
      </Flex>
    </>
  );
};

export default ServicesCards;
