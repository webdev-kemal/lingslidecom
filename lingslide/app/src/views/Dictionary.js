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
} from "@chakra-ui/react";
import { RxHamburgerMenu, RxTokens, RxPlus } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import words from "../api/words";

const Dictionary = () => {
  const navigate = useNavigate();

  const [grillView, toggleGrillView] = useState(false);
  const [heading, setHeading] = useState("Choose a word");
  const [filterMethods, setFilterMethods] = useState([]);

  const getBackgroundColor = (wordType) => {
    switch (wordType) {
      case "noun":
        return "green";
      case "verb":
        return "linear-gradient(to top left, #000b86 0%, #0015ff 100%)";
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
        onClick={() => {
          // navigate(`./${title}`);
        }}
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
                  checked={filterMethods.includes("name")}
                  onChange={() => toggleFilter("name")}
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
