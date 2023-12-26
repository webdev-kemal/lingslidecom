import React, { useState } from "react";
import { Heading, Box, Text, Stack, Flex, Container } from "@chakra-ui/react";

const Positions = () => {
  const [selectedJob, setJob] = useState(null);

  const TextApply = () => (
    <Text
      pos={"absolute"}
      right={"2%"}
      top={"0%"}
      fontSize={"50px"}
      fontWeight={"bold"}
      color="gray.600"
    >
      BAŞVUR
    </Text>
  );

  return (
    <>
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
          <Heading size="xl">Açık pozisyonlarımız</Heading>
          <Stack color="white" spacing={2}>
            <Box
              _hover={{ cursor: "pointer" }}
              pos={"relative"}
              rounded={"md"}
              p={5}
              border={"solid 1px white"}
              onMouseOver={() => {
                setJob(0);
              }}
            >
              <Text>Yapay Zeka Uzmanı</Text>
              {selectedJob === 0 && <TextApply />}
            </Box>
            <Box
              _hover={{ cursor: "pointer" }}
              pos={"relative"}
              rounded={"md"}
              p={5}
              border={"solid 1px white"}
              onMouseOver={() => {
                setJob(1);
              }}
            >
              <Text>Veri Analisti</Text>
              {selectedJob === 1 && <TextApply />}
            </Box>
            <Box
              _hover={{ cursor: "pointer" }}
              pos={"relative"}
              rounded={"md"}
              p={5}
              border={"solid 1px white"}
              onMouseOver={() => {
                setJob(2);
              }}
            >
              <Text>Arkauç Geliştirici</Text>
              {selectedJob === 2 && <TextApply />}
            </Box>
            <Box
              _hover={{ cursor: "pointer" }}
              pos={"relative"}
              rounded={"md"}
              p={5}
              border={"solid 1px white"}
              onMouseOver={() => {
                setJob(3);
              }}
            >
              <Text>Dilbilim Uzmanı</Text>
              {selectedJob === 3 && <TextApply />}
            </Box>
            <Box
              _hover={{ cursor: "pointer" }}
              pos={"relative"}
              rounded={"md"}
              p={5}
              border={"solid 1px white"}
              onMouseOver={() => {
                setJob(4);
              }}
            >
              <Text>Sosyal Medya</Text>
              {selectedJob === 4 && <TextApply />}
            </Box>
          </Stack>
        </Stack>
      </Container>{" "}
    </>
  );
};

export default Positions;
