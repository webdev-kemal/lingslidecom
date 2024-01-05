import React from "react";
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
  Image,
  Select,
} from "@chakra-ui/react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import Painting from "../deco/Painting";
import { BsCheck2All, BsArrowRight } from "react-icons/bs";

const Page404 = () => {
  const history = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  return (
    <Container
      color={"white"}
      fontFamily={"League Spartan"}
      minW="60%"
      mx="auto"
      pos="relative"
      minH="98vh"
      zIndex="1"
    >
      <Stack
        as={Box}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        textAlign={"center"}
      >
        <Heading size="2xl" color="pink.400">
          Aradığınız sayfa bulunamadı.
        </Heading>
        <Painting />

        <Flex
          align="center"
          _hover={{
            cursor: "pointer",
            ".hoverIcon": {
              marginLeft: "10px",
              transition: "all ease-out 0.2s",
            },
            ".dahaFazlasi": {
              textDecoration: "underline",
            },
          }}
          transition="all ease-out 0.2s"
        >
          <Text
            className="dahaFazlasi"
            onClick={() => {
              history(redirect);
            }}
          >
            Anasayfaya dönün
          </Text>
          &nbsp;
          <BsArrowRight className="hoverIcon" transition="all ease-out 0.2s" />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Page404;
