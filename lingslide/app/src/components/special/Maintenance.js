import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Image,
  Grid,
  Text,
  Select,
  Button,
  Heading,
  Flex,
  Stack,
} from "@chakra-ui/react";
//localisation
import { FormattedMessage } from "react-intl";
import { Context, SelectLanguage } from "../../components/Wrapper";
import { LuBookOpen } from "react-icons/lu";

const Maintenance = () => {
  const postLinks = [
    "https://www.instagram.com/lingslide/",
    // "https://www.instagram.com/p/C1l7BtmMNWg/",
    // "https://www.instagram.com/p/C1W2RFCsfDy/",
    // "https://www.instagram.com/p/C1T1mkasiKV/",
    // "https://www.instagram.com/p/CzOKwH-M8fV/",
  ];

  const context = useContext(Context);

  return (
    <Box pos="absolute" w="100%" h="100%" overflow="hidden">
      {/* <LuBookOpen
        style={{
          position: "fixed",
          left: "50%",
          bottom: "5%",
          transform: "translate(-50%,0%)",
        }}
        color="gray"
        size="130px"
        zIndex="999" //
      /> */}
      <Box
        zIndex="999" //
        pos={"fixed"}
        ml={"auto"} // Use ml={"auto"} to push it to the right
        top={"250px"}
        overflow="hidden"
        left="50%"
        transform="translate(-50%, 0%)"
      >
        <SelectLanguage />
      </Box>
      <Box
        // bg="rgba(0, 0, 0, 0.8)" // Black background with 50% opacity
        bg="#13163c"
        position="fixed"
        width="100%"
        height="100%"
        zIndex="997" // Behind the grid
        overflow="hidden"
      ></Box>
      <Box
        // overflow="hidden"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="999"
        // bg={"pink.600"}
        // w={"530px"}
        // h={"300px"}
        // rounded="xl"
        textAlign={"center"}
      >
        <Stack spacing={3}>
          <Heading
            fontFamily={"League Spartan"}
            color={"pink.400"}
            href="https://www.instagram.com/lingslide/"
            size="2xl"
            //   //   width="400"
          >
            Lingslide
          </Heading>
          <Text
            fontFamily={"League Spartan"}
            color={"white"}
            href="https://www.instagram.com/lingslide/"
            //   //   width="400"
          >
            <FormattedMessage id="maintenance.header" />
          </Text>
          <Button
            as="a"
            href="https://www.instagram.com/lingslide/"
            border="none"
            px="10"
            colorScheme="blue"
          >
            <FormattedMessage id="maintenance.button" />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Maintenance;
