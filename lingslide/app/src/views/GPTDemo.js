import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
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
import { BsCheck2All, BsArrowRight } from "react-icons/bs";

const GPTDemo = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const { theme } = useContext(ThemeContext);

  const [isDesktop] = useMediaQuery("(min-width: 600px)");

  const [selectedTab, setTab] = useState(0);

  const sendReq = () => {
    console.log(userInput);
    // setLoading((prevState) => !prevState);
    setLoading(true);
  };

  const tabInfo = () => {
    if (selectedTab === 0) {
      return (
        <>
          <Heading fontSize={"lg"} mb={2}>
            Sorgu
          </Heading>
          <Text mb={5} color="pink.400">
            Girdi: {userInput}
          </Text>

          <Heading fontSize={"lg"} mb={2}>
            Yanıt
          </Heading>
          <Text mb={5}>
            {loading ? (
              <Text color="green.400">Yanıt bekleniyor...</Text>
            ) : (
              <Text color="gray.400">Girdi bekleniyor...</Text>
            )}
          </Text>

          <Heading fontSize={"lg"} mb={2}>
            Alternatif
          </Heading>
          <Text>Text3</Text>
        </>
      );
    }
    if (selectedTab === 1) {
      return (
        <>
          <Text>Sample text</Text>
        </>
      );
    }
  };

  return (
    <div>
      {" "}
      <Container
        color={"white"}
        fontFamily={"League Spartan"}
        minW="100%"
        minH="98vh"
        // bg={theme === "dark" ? "#13163c" : "#13163c"}
      >
        <Stack
          mx={{ base: "4%", md: "23%" }}
          as={Box}
          //   textAlign={"center"}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 20, md: 20 }}
        >
          <Box
            bg={"rgba(255,255,255,1)"}
            w="100%"
            h={"27px"}
            m="0px"
            pos={"relative"}
            display="flex" // Make this Box a flex container
            alignItems="center"
            color={"black"}
          >
            <Box
              pos={"absolute"}
              left={"0%"}
              h={"100%"}
              w="5px"
              bg="pink.400"
            ></Box>

            <Flex align="center" justifyContent="space-between" w="100%">
              <Text ms={3} mt={1} fontWeight={"700"}>
                GPT-4 Demo
              </Text>
              <Text me={3} mt={1} fontWeight={"700"}>
                Lingslide Beta
              </Text>
            </Flex>
          </Box>
          <Heading size="xl">Hemen deneyin!</Heading>

          <Grid templateColumns={isDesktop ? "3fr 3fr" : "6fr "}>
            <GridItem
              pos="relative"
              width={"95%"}
              py={3}
              background={"rgba(0,0,0,0.7)"}
              cursor={"pointer"}
              _hover={{
                background: "rgba(255,255,255,0.2)",
                transition: "all 0.1s",
              }}
              onClick={() => {
                setTab(0);
              }}
            >
              <Text fontWeight={"bold"}>Öğrencilerinizi takip edin</Text>
              <Box
                w="100%"
                pos="absolute"
                bg={selectedTab === 0 ? "pink.400" : "white"}
                bottom="0"
                h={"2px"}
              ></Box>
            </GridItem>
            <GridItem
              pos="relative"
              width={"95%"}
              py={3}
              background={"rgba(0,0,0,0.7)"}
              cursor={"pointer"}
              _hover={{
                background: "rgba(255,255,255,0.2)",
                transition: "all 0.1s",
              }}
              onClick={() => {
                setTab(1);
              }}
            >
              <Text fontWeight={"bold"}>Slaytlardan para kazanma*</Text>
              <Box
                w="100%"
                pos="absolute"
                bg={selectedTab === 1 ? "pink.400" : "white"}
                bottom="0"
                h={"2px"}
              ></Box>
            </GridItem>
          </Grid>
          <Box>
            <Flex gap="2">
              <Input
                placeholder="Yazdıktan sonra gönder'e basın!"
                onChange={(e) => {
                  setUserInput(e.target.value);
                }}
              />{" "}
              <Button
                variant={"outline"}
                _hover={{ bg: "rgba(255,0,0,0.2)" }}
                colorScheme="pink.300"
                onClick={sendReq}
                minW={"100px"}
                isDisabled={loading || userInput.length <= 2}
              >
                {loading ? (
                  <Spinner
                    thickness="2px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="red.500"
                    size="md"
                  />
                ) : (
                  "Gönder"
                )}
              </Button>
            </Flex>
          </Box>
          <Box>{tabInfo()}</Box>
        </Stack>
      </Container>
    </div>
  );
};

export default GPTDemo;
