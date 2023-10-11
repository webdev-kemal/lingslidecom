import { Box, Heading, Text, Button, Stack, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { BsCheckCircleFill, BsCheck2All } from "react-icons/bs";

export const Card = ({
  heading,
  description,
  icon,
  href,
  isSelected,
  customPadding,
  role,
}) => {
  const { setSelected, isStudent } = useContext(ThemeContext);

  return (
    <Box
      flex={{ base: null, md: 1 }}
      cursor={"pointer"}
      maxW={isStudent ? { base: "full", md: "255px" } : { base: "full" }}
      minH={{ base: "full", md: "340px" }}
      w={"full"}
      border={"1px solid white"}
      p={5}
      overflow="hidden"
      onClick={() => setSelected(role)}
      _hover={{ bg: "rgba(255,255,255,0.1)" }}
      position={"relative"}
    >
      {isSelected && (
        <Box>
          <Box
            display="flex"
            alignItems="center"
            position={"absolute"}
            left={{ base: "77%", md: "50%" }}
            transform={"translate(-50%, 0%)"}
            bottom={{ base: "76%", md: "3%" }}
          >
            <Text
              fontFamily={"League Spartan"}
              fontWeight="bold"
              fontSize="2xl"
              me={1}
            >
              Lingslide
            </Text>
            <BsCheck2All size="21px" />
          </Box>
          <Box
            position={"absolute"}
            right={"0%"}
            bottom={"0%"}
            w="0"
            h="0"
            borderLeft="15px solid transparent"
            borderBottom="15px solid white"
          ></Box>
        </Box>
      )}
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"transparent"}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="xl">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};
