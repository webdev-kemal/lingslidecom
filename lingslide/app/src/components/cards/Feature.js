import { Box, Heading, Text, Button, Stack, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../../App";

export const Card = ({
  heading,
  description,
  icon,
  href,
  customBorder,
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
      border={customBorder}
      p={5}
      overflow="hidden"
      onClick={() => setSelected(role)}
      _hover={{ bg: "rgba(255,255,255,0.1)" }}
    >
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
