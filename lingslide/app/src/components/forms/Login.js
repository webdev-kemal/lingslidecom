// LoginForm.js
import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Box,
  Stack,
  Container,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
// import { useFormik } from "formik";
import { login } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [userDetails, setUserDetails] = useState({});

  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.user);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.email);
      history(redirect);
      // console.log("decodedToken:", userDetails);
    }
  }, [history, userInfo, redirect]);

  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   const handleRegister = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const response = await axios.post(
  //         "http://127.0.0.1:8000/auth/login/",
  //         {
  //           email,
  //           password,
  //         },
  //         config
  //       );

  //       console.log("User logged in successfully:", response.data);
  //       // You can handle the success response here (e.g., redirect to login page).
  //     } catch (error) {
  //       console.error("Login failed:", error.response.data);

  //       // Handle the error response (e.g., display an error message).
  //       if (error.response && error.response.data) {
  //         const errorData = error.response.data;
  //         // You can now access the detailed error messages for each field
  //         console.log("Detailed Errors:", errorData);

  //         setErrorMessages(Object.values(errorData).flat());
  //       }
  //     }
  //   };

  return (
    // dispatch(login(email, password))
    // <form onSubmit={handleRegister}>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(login(email, password));
      }}
    >
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
      <Button
        type="submit"
        minW="130px"
        variant="outline"
        colorScheme="teal.200"
        mt={4}
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
          "Giriş Yap"
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
