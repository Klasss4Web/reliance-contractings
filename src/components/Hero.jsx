import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hero from "../assets/hero.jpg";
import domestic from "../assets/domestic.jpg";
import heroBg from "../assets/hero-bg.jpg";
import window from "../assets/window.jpg";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { useEffect, useRef } from "react";
import { ball } from "../utils/ballMovements";
// import Jump from "react-reveal/Jump";

export const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    for (let i = 0; i < 5; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.width = `${Math.floor(Math.random() * 80) + 20}px`;
      bubble.style.height = `${bubble.style.width}`;
      bubble.style.top = `${Math.floor(Math.random() * 90) + 10}%`;
      bubble.style.left = `${Math.floor(Math.random() * 50) + 10}%`;
      container.appendChild(bubble);
    }
  }, []);

  return (
    <div className="bubble-container" ref={containerRef}>
      <Carousel autoPlay={true} infiniteLoop={true} interval={3000}>
        {/* <div className="containers" ref={containerRef}></div> */}
        <Zoom>
          <Box
            position="relative"
            top="100px"
            width={"100%"}
            height={["650px"]}
            backgroundImage={heroBg}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"2000px"}
            backgroundBlendMode={"lighten"}
          >
            {/* <Box id="container">
              <Box id="redball"></Box>
              <Box id="greenball"></Box>
            </Box> */}
            <Flex
              p={[
                "180px 30px 100px 30px",
                "180px 30px",
                "150px 30px 20px 30px",
                "150px 80px 0px 80px",
              ]}
              direction={["column", "column", "row"]}
              position="relative"
            >
              <Flex
                width="100%"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text
                  fontSize={["1.7em", "2em", "2em", "2.5rem"]}
                  fontFamily={("Gill Sans", "sans-serif")}
                  fontWeight={"bold"}
                  color="gold"
                  lineHeight={1}
                  maxW={["95%", "90%", "70%"]}
                >
                  Discover the ultimate cleaning experience with our expert
                  team. From homes to offices, we provide a deep clean that is
                  second to none. Book your appointment now and let us do the
                  dirty dirty for you
                </Text>
              </Flex>
              
              {/* </Jump>
        </Zoom> */}
            </Flex>
          </Box>
        </Zoom>

        <Box
          position="relative"
          top="100px"
          width={"100%"}
          height={["650px"]}
          backgroundImage={window}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"2000px"}
          backgroundBlendMode={"lighten"}
        >
          <Flex
            p={[
              "180px 30px 100px 30px",
              "180px 30px",
              "150px 30px 20px 30px",
              "150px 80px 0px 80px",
            ]}
            direction={["column", "column", "row"]}
            position="relative"
          >
            <Zoom>
              <Flex
                width="100%"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text
                  fontSize={["1.7em", "2em", "2em", "2.5rem"]}
                  fontFamily={("Gill Sans", "sans-serif")}
                  fontWeight={"bold"}
                  color="gold"
                  lineHeight={1}
                  maxW={["70%"]}
                >
                  Welcome to a world of clean. Our professional cleaners will
                  transform your space into a spotless oasis. Sit back, relax
                  and enjoy the pristine results. Contact us today to schedule
                  your cleaning.
                </Text>
              </Flex>
            </Zoom>

            {/* </Jump>
        </Zoom> */}
          </Flex>
        </Box>
        <Box
          position="relative"
          top={["100px"]}
          width={"100%"}
          height={["300px", "300px", "650px"]}
          backgroundImage={domestic}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"2000px"}
          backgroundBlendMode={"lighten"}
        >
          <Flex
            p={[
              "180px 10px 100px 10px",
              "180px 30px",
              "150px 30px 20px 30px",
              "150px 80px 0px 80px",
            ]}
            direction={["column", "column", "row"]}
            align={"center"}
            justify={"center"}
            h="300px"
            // position="relative"
          >
            {/* <Zoom> */}

            <Flex width="100%" alignItems={"center"} justifyContent={"center"}>
              <Text
                fontSize={["1em", "1.2em", "2em", "2.5rem"]}
                fontFamily={("Gill Sans", "sans-serif")}
                fontWeight={"bold"}
                color="yellow"
                lineHeight={1}
                maxW={["100%", "100%", "70%"]}
              >
                Cleanliness is our specialty. Trust our team of experienced
                cleaners to give your home or office the attention it deserves.
                With our eco-friendly products and impeccable attention to
                detail, your space will shine like never before.
              </Text>
            </Flex>
            {/* </Zoom> */}

            {/* </Jump>
        </Zoom> */}
          </Flex>
        </Box>
      </Carousel>
    </div>
  );
};
