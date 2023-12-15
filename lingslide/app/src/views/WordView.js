import React, { useState } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  createIcon,
  Flex,
  useMediaQuery,
  IconButton,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const WordView = () => {
  const { title } = useParams();
  return (
    <Container
      color={"white"}
      fontFamily={"League Spartan"}
      minW="60%"
      mx="auto"
      minH="98vh"
    >
      <Stack as={Box} spacing={{ base: 8, md: 8 }} py={{ base: 20, md: 28 }}>
        <Box bg={"cyan"} w="fit-content">
          <Text textTransform="uppercase" fontWeight="bold" fontSize="100px">
            {title}
          </Text>
        </Box>
        {/* <Box>

      <Heading>My Dictionary</Heading>
      <Box display="flex" flexDirection="row" alignItems="center">; */}
      </Stack>
    </Container>
  );
};

export default WordView;
