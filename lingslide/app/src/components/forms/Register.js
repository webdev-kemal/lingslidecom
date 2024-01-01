// RegisterForm.js
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Box,
  Stack,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
// import { register } from "../../actions/user";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
// import { useFormik } from "formik";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

  // const dispatch = useDispatch();

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/register/",
        {
          email,
          password,
        },
        config
      );

      console.log("User registered successfully:", response.data);
      // You can handle the success response here (e.g., redirect to login page).
    } catch (error) {
      console.error("Registration failed:", error.response.data);

      // Handle the error response (e.g., display an error message).
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        // You can now access the detailed error messages for each field
        console.log("Detailed Errors:", errorData);

        setErrorMessages(Object.values(errorData).flat());
      }
    }
  };

  return (
    <form onSubmit={handleRegister}>
      {errorMessages.length > 0 && (
        <Box mt={4}>
          {errorMessages.map((error, index) => (
            <Text key={index} color="red.500">
              {error}
            </Text>
          ))}
        </Box>
      )}
      <FormLabel>Email</FormLabel>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb={4}
      />
      <FormLabel>Password</FormLabel>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        mb={2}
      />
      <Button type="submit" variant="outline" colorScheme="teal.200" mt={4}>
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
