import { Box, Image } from "@chakra-ui/react";
import React from "react";

import { motion } from "framer-motion";

const HoveringBall = ({ ...props }) => {
  return (
    <>
      {/* <motion.div
        animate={{ y: [750, 740, 750] }} // Array of values for y-axis movement
        transition={{
          duration: 7, // Duration of each iteration
          repeat: Infinity, // Repeat the animation infinitely
          ease: "easeInOut", // Easing function for smoother animation
        }}
        {...props}
        // position="absolute"
      >
        <Image
          position="absolute"
          left={"10%"}
          // mt={"90px"}
          src={process.env.PUBLIC_URL + "/redcircle.png"}
          alt="Example Image"
          boxSize="400px"
        />
      </motion.div> */}
      <motion.div
        animate={{ y: [220, 210, 220] }} // Array of values for y-axis movement
        transition={{
          duration: 7, // Duration of each iteration
          repeat: Infinity, // Repeat the animation infinitely
          ease: "easeInOut", // Easing function for smoother animation
        }}
        // position="absolute"
      >
        <Image
          position="absolute"
          right={"10%"}
          // mt={"90px"}
          src={process.env.PUBLIC_URL + "/redcircle.png"}
          alt="Example Image"
          boxSize={{ base: "300px", md: "600px" }}
        />
      </motion.div>
      {/* <motion.div
        animate={{ y: [390, 380, 390] }} // Array of values for y-axis movement
        transition={{
          duration: 6, // Duration of each iteration
          repeat: Infinity, // Repeat the animation infinitely
          ease: "easeInOut", // Easing function for smoother animation
        }}
        // position="absolute"
      >
        <Image
          position="absolute"
          right={"10%"}
          // mt={"90px"}
          src={process.env.PUBLIC_URL + "/redcircle.png"}
          alt="Example Image"
          boxSize={{ base: "300px", md: "500px" }}
        />
      </motion.div>  */}
    </>
  );
};

export default HoveringBall;
