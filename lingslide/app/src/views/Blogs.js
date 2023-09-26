import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { Container } from "@chakra-ui/react";

const Blogs = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {" "}
      <Container
        color={"white"}
        fontFamily={"League Spartan"}
        minW="100%"
        minH="98vh"
        bg={theme === "dark" ? "#13163c" : "#13163c"}
      >
        lmfao
      </Container>
    </div>
  );
};

export default Blogs;
