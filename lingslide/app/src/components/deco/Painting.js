import React from "react";
import {
  Box,
  Heading,
  Container,
  Grid,
  GridItem,
  Text,
  Button,
  Input,
  Stack,
  Icon,
  createIcon,
  Badge,
  Flex,
  useMediaQuery,
  Spinner,
} from "@chakra-ui/react";

const Painting = () => {
  return (
    <Box
      w="100%"
      height={"200px"}
      border="1px solid white"
      // bg="rgba(0,0,0,0.5)"

      rounded="md"
      overflow="hidden"
    >
      <Box
        style={{
          background: `url(${process.env.PUBLIC_URL}/redcircle.png) center / cover no-repeat`,
          /* Add other styles as needed */
          animation: "rotate 22s linear infinite",
        }}
        // mt="20px"
        mx="auto"
        w={"100%"}
        h={"100%"}
        boxSize={"1000px"}
      ></Box>
    </Box>
  );
};

export default Painting;
