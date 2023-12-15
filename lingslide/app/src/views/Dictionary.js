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
import { RxHamburgerMenu, RxTokens } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Dictionary = () => {
  const navigate = useNavigate();

  const [grillView, toggleGrillView] = useState(false);
  const [filterMethods, setFilterMethods] = useState([]);

  const getBackgroundColor = (wordType) => {
    switch (wordType) {
      case "noun":
        return "green";
      case "verb":
        return "blue";
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

  const arrayOfWords = [
    {
      title: "adelgazar",
      ranking: "421",
      phrases: [
        "se volvio para adelgazar un poco de mas",
        "ademas, se decidio a adelgazar sin ambargo",
      ],
      synonyms: ["perder de poid", "minorar"],
      type: "verb",
      verb_participe: "adelgazado",
      verb_group: "regular",
    },
    {
      title: "arreglar",
      ranking: "321",
      phrases: ["mi correo puedes arreglar", "el coche se necesita arreglar"],
      synonyms: ["fijar", "corregir"],
      type: "verb",
      verb_participe: "arreglado",
      verb_group: "regular",
    },
    {
      title: "ver",
      ranking: "17",
      phrases: [
        "estaba mirando desde la ventana",
        "mire sus ojos calientemente",
      ],
      synonyms: ["mirar", "minorar"],
      type: "conj",
      verb_participe: "visto",
      verb_group: "irregular",
    },
    {
      title: "borrar",
      ranking: "217",
      phrases: [
        "estaba mirando desde la ventana",
        "mire sus ojos calientemente",
      ],
      synonyms: ["mirar", "minorar"],
      type: "verb",
      verb_participe: "adelgazado",
      verb_group: "regular",
    },
    {
      title: "casar",
      ranking: "87",
      phrases: [
        "estaba mirando desde la ventana",
        "mire sus ojos calientemente",
      ],
      synonyms: ["mirar", "minorar"],
      type: "adj",
      verb_participe: "casado",
      verb_groups: ["regular", "reflexivo", "modal", "transitivo"],
    },
    {
      title: "demasiada",
      ranking: "147",
      phrases: [
        "estaba mirando desde la ventana",
        "mire sus ojos calientemente",
      ],
      synonyms: ["mirar", "minorar"],
      type: "conj",
      verb_participe: "",
      verb_group: "",
    },
    {
      title: "cuidamente",
      ranking: "147",
      phrases: [
        "estaba mirando desde la ventana",
        "mire sus ojos calientemente",
      ],
      synonyms: ["mirar", "minorar"],
      type: "adv",
      verb_participe: "",
      verb_group: "",
    },
  ];

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

  const CardElement = ({ title, ranking, phrases, synonyms, type }) => {
    const backgroundColor = getBackgroundColor(type);
    return (
      <Box
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

  return (
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
          </Box>
        </Box>
        {grillView ? (
          <Stack spacing={0}>
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
  );
};

export default Dictionary;
