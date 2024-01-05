import React, { useState } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  Select,
  createIcon,
  Flex,
  useMediaQuery,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  RxHamburgerMenu,
  RxTokens,
  RxPlus,
  RxDoubleArrowDown,
  RxDoubleArrowUp,
} from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import words from "../api/words_advanced";
import { LuBookOpen } from "react-icons/lu";

const Dictionary = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [grillView, toggleGrillView] = useState(true);
  const [heading, setHeading] = useState("sözlüğüm");
  const [filterMethods, setFilterMethods] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const getBackgroundColor = (wordType) => {
    switch (wordType) {
      case "noun":
        return "#D53F8C";
      case "verb":
        return "#0015ff";
      // return "linear-gradient(to top left, #000b86 0%, #0015ff 100%)";
      case "adj":
        return "orange";
      case "adv":
        return "purple";
      case "prep":
        return "red";
      case "conj":
        return "cyan";
      default:
        return "gray"; // Default color for unknown types
    }
  };
  //recommendations prop: we highly recommend to learn these words to be able to use the verb <verb>
  const arrayOfWords = words;

  //   const filteredWords = filterMethod
  //     ? arrayOfWords.filter((word) => word.type === filterMethod)
  //     : arrayOfWords;

  const toggleFilter = (filter) => {
    if (filterMethods.includes(filter)) {
      setFilterMethods(filterMethods.filter((method) => method !== filter));
    } else {
      setFilterMethods([...filterMethods, filter]);
    }
  };

  const CardElement = ({
    title,
    ranking,
    phrases,
    synonyms,
    type,
    headingFunc,
  }) => {
    const backgroundColor = getBackgroundColor(type);

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
        onMouseOver={() => {
          setHeading(`${title}`);
        }}
        m={1}
        display="inline"
        p={"4px"}
        py={"8px"}
        rounded={"md"}
        bg={backgroundColor}
        color={"white"}
        onClick={() => {
          navigate(`./${title}`);
        }}
      >
        {title}
      </Box>
    );
  };

  const AddCardElement = ({ headingFunc }) => {
    return (
      <Box
        _hover={{
          transform: "translateX(11px)",
          filter: "brightness(0.8)",
          transition: "0.2s",
          cursor: "pointer",
        }}
        transition={"0.2s"}
        onMouseOver={headingFunc}
        m={1}
        border={"solid white 1px"}
        display="inline"
        p={"4px"}
        py={"8px"}
        rounded={"md"}
        bg={"transparent"}
        color={"white"}
        onClick={onOpen}
      >
        yeni kelime ekle{" "}
        {grillView && (
          <Icon
            as={RxPlus}
            pos="relative"
            left="36%"
            transform={"translate(0%,15%)"}
            variant="unstyled"
          />
        )}
      </Box>
    );
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="gray.800" color={"white"}>
          <Box>
            <LuBookOpen
              style={{
                position: "absolute",
                right: "50%",
                top: "50%",
                transform: "translate(50%, -50%)",
              }}
              color="gray"
              size="150px"
            />
            <Text
              w="100%"
              position="absolute"
              color="gray"
              textAlign={"center"}
              top="63%"
            >
              Expanding your vocabulary...
            </Text>
          </Box>
          <DrawerCloseButton />
          <DrawerHeader>Kelime Ekle</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Kelimeyi girin..." />
          </DrawerBody>

          <DrawerFooter>
            <Button
              colorScheme="white"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Heading
        color={"gray.600"}
        pos="fixed"
        top={"20%"}
        left={"50%"} // Center horizontally
        transform={"translate(-50%, -50%)"}
        fontSize={"170px"}
        zIndex={"-10"}
      >
        >{heading}
      </Heading>
      <Container
        color={"white"}
        fontFamily={"League Spartan"}
        minW="60%"
        mx="auto"
        minH="98vh"
      >
        <Stack as={Box} spacing={{ base: 8, md: 8 }} py={{ base: 20, md: 28 }}>
          {/* CHANGE CURRENT COLLECTION */}
          <Accordion allowToggle allowMultiple>
            <AccordionItem border="none">
              {" "}
              <AccordionButton
                as="Flex"
                alignItems="center"
                w="100%"
                h="50px"
                bg="rgba(0,0,0,0.5)"
                border="1px solid white"
                _hover={{
                  bg: "rgba(0,0,0,0.3)",
                  cursor: "pointer",
                }}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
              >
                <RxDoubleArrowUp
                  style={{ "margin-left": "8px" }}
                  fontSize={"28px"}
                  style={{
                    marginLeft: "8px",
                    transform: isHovered ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "all ease-out 0.2s",
                  }}
                />
                <Text mt="2" ms="2" fontSize="30px">
                  Current set
                </Text>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Box
                  bg="rgba(0,0,0,0.7)"
                  p={5}
                  _hover={{
                    cursor: "pointer",
                    bg: "rgba(255,255,255,0.1)",
                    transition: "0.1s",
                  }}
                >
                  B1 Kelimelerrr
                </Box>

                <Box
                  bg="rgba(0,0,0,0.7)"
                  p={5}
                  _hover={{
                    cursor: "pointer",
                    bg: "rgba(255,255,255,0.1)",
                    transition: "0.1s",
                  }}
                >
                  Mutfakla ilgili her şey
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Box>
            <Heading>My Dictionary</Heading>
            <Box display="flex" flexDirection="row" alignItems="center">
              <IconButton
                icon={<RxTokens color="white" />}
                onClick={() => {
                  // toggleGrillView((prevState) => !prevState);
                  toggleGrillView(false);
                }}
                variant="unstyled" // This removes the background
              />
              <IconButton
                icon={<RxHamburgerMenu color="white" />}
                onClick={() => {
                  toggleGrillView(true);
                }}
                variant="unstyled" // This removes the background
                left="-17px"
              />
              <Text me={3}>göre filtrele:</Text>
              <label style={{ marginRight: "9px" }}>
                <input
                  type="checkbox"
                  checked={filterMethods.includes("noun")}
                  onChange={() => toggleFilter("noun")}
                />
                İsim
              </label>
              <label style={{ marginRight: "9px" }}>
                <input
                  type="checkbox"
                  checked={filterMethods.includes("verb")}
                  onChange={() => toggleFilter("verb")}
                />
                Fiil
              </label>
              <label style={{ marginRight: "9px" }}>
                <input
                  type="checkbox"
                  checked={filterMethods.includes("adj")}
                  onChange={() => toggleFilter("adj")}
                />
                Sıfat
              </label>
              <label style={{ marginRight: "9px" }}>
                <input
                  type="checkbox"
                  checked={filterMethods.includes("adv")}
                  onChange={() => toggleFilter("adv")}
                />
                Zarf
              </label>
              <label style={{ marginRight: "9px" }}>
                <input
                  type="checkbox"
                  checked={filterMethods.includes("conj")}
                  onChange={() => toggleFilter("conj")}
                />
                Edat
              </label>
              <Text ms={3} me={3}>
                göre sırala:
              </Text>
              <Select size="sm" maxW={"150px"} bg="#13163C">
                <option
                  style={{ backgroundColor: "#13163C" }}
                  value="Alfabetik"
                >
                  Alfabetik
                </option>
                <option style={{ backgroundColor: "#13163C" }} value="newtoold">
                  Yeniden eskiye
                </option>
                <option style={{ backgroundColor: "#13163C" }} value="oldtonew">
                  Eskiden yeniye
                </option>
              </Select>
            </Box>
          </Box>
          {grillView ? (
            <Stack spacing={0}>
              <AddCardElement />
              {filterMethods.length > 0
                ? arrayOfWords
                    .filter((word) => filterMethods.includes(word.type))
                    .map((word) => (
                      <CardElement
                        key={word.title}
                        title={word.title}
                        ranking={word.ranking}
                        type={word.type}
                      />
                    ))
                : arrayOfWords.map((word) => (
                    <CardElement
                      key={word.title}
                      title={word.title}
                      ranking={word.ranking}
                      type={word.type}
                    />
                  ))}
            </Stack>
          ) : (
            <Box>
              <AddCardElement />
              {filterMethods.length > 0
                ? arrayOfWords
                    .filter((word) => filterMethods.includes(word.type))
                    .map((word) => (
                      <CardElement
                        key={word.title}
                        title={word.title}
                        ranking={word.ranking}
                        type={word.type}
                      />
                    ))
                : arrayOfWords.map((word) => (
                    <CardElement
                      key={word.title}
                      title={word.title}
                      ranking={word.ranking}
                      type={word.type}
                    />
                  ))}
            </Box>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Dictionary;
