import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  HStack,
  Grid,
  Stack,
  Icon,
  Select,
  Flex,
  useMediaQuery,
  IconButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { RxPlus, RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import collections from "../api/mycollections";
import { LuBookOpen } from "react-icons/lu";
import AddCollection from "../components/forms/AddCollection";

const Collections = () => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  //recommendations prop: we highly recommend to learn these words to be able to use the verb <verb>
  const arrayOfCollections = collections;

  const CardElement = ({ title, emoji, wordcount }) => {
    return (
      <Box
        _hover={{
          transform: "translateX(11px)",
          filter: "brightness(0.8)",
          transition: "0.2s",
          cursor: "pointer",
        }}
        transition={"0.2s"}
        // onMouseOver={headingFunc}
        bg="rgba(255,255,255,0.1)"
        my={2}
        // display="inline"
        p={"4px"}
        py={"8px"}
        rounded={"md"}
        color={"white"}
        onClick={() => {
          navigate(`./${title}`);
        }}
      >
        <HStack spacing={3}>
          <Heading>{emoji}</Heading>
          <Text fontWeight={"bold"}>{title}</Text>
          <Text color={"gray.400"}>{wordcount} words</Text>
        </HStack>
      </Box>
    );
  };

  return (
    <>
      <Container
        color={"white"}
        fontFamily={"League Spartan"}
        minW="60%"
        mx="auto"
        minH="98vh"
      >
        <Stack as={Box} spacing={{ base: 8, md: 8 }} py={{ base: 20, md: 28 }}>
          {/* CHANGE CURRENT COLLECTION */}

          <Flex justifyContent={"space-between"}>
            <Heading>Koleksiyonlarım</Heading>
            <Button
              color="blue.400"
              fontWeight={"bold"}
              fontSize={"20px"}
              variant="link"
              onClick={onOpen}
            >
              Yeni oluştur
            </Button>
          </Flex>

          <Box>
            {arrayOfCollections.map((collection) => (
              <CardElement
                key={collection.title}
                title={collection.title}
                emoji={collection.emoji}
                wordcount={collection.words.length}
              />
            ))}
          </Box>
        </Stack>
      </Container>

      <AddCollection isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Collections;
