// App.js
import {
  Container,
  Stack,
  Box,
  Button,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import RegisterForm from "../components/forms/Register";
import LoginForm from "../components/forms/Login";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Teachers", "Students", "Insights", "Slides"];

const colorMap = {
  Teachers: "orange.300",
  Students: "green.300",
  Insights: "pink.400",
  Slides: "blue.300",
};

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const [text, setText] = useState("Insights");
  // const [color, setColor] = useState("pink.400");
  // const [rotate, setRotate] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container
      color={"white"}
      fontFamily={"League Spartan"}
      minW="60%"
      mx="auto"
      minH="98vh"
    >
      <Stack
        mx="auto"
        as={Box}
        w={{ base: "90%", md: "60%" }}
        color={"white"}
        spacing={{ base: 4, lg: 4 }}
        py={{ base: 20, md: 28 }}
      >
        <Flex mb={3}>
          <Heading
            size={{ base: "lg", lg: "2xl" }}
            mr={{ base: 2, lg: 3 }}
            color={colorMap[words[index]] || "white"}
            transition={"0.2s"}
          >
            Lingslide
          </Heading>
          <Heading
            size={{ base: "lg", lg: "2xl" }}
            mr={{ base: 2, lg: 3 }}
            color={"white"}
          >
            for
          </Heading>

          <AnimatePresence mode="wait">
            <motion.div
              key={words[index]}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Heading size={{ base: "lg", lg: "2xl" }} color={"white"}>
                {words[index]}
              </Heading>
            </motion.div>
          </AnimatePresence>
        </Flex>
        <Box w="100%" mx={"auto"}>
          <Button
            w={"50%"}
            onClick={() => {
              setIsLogin(true);
            }}
            rounded={"none"}
            variant={"outline"}
            color={"white"}
            _hover={{ background: colorMap[words[index]] || "black" }}
          >
            Login
          </Button>
          <Button
            w={"50%"}
            onClick={() => {
              setIsLogin(false);
            }}
            rounded={"none"}
            variant={"outline"}
            color={"white"}
            _hover={{ background: colorMap[words[index]] || "black" }}
          >
            Register
          </Button>
        </Box>

        {!isLogin ? <h1>Registration Form</h1> : <h1>Login Form</h1>}
        {!isLogin ? <RegisterForm /> : <LoginForm />}
      </Stack>
    </Container>
  );
};

export default Login;

// RegisterForm
