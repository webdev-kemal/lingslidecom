import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { ThemeContext } from "../../App";

export function App() {
  const { isStudent } = useContext(ThemeContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      language: "",
      suggestions: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box p={0} maxWidth="400px" mx="auto">
      <form onSubmit={formik.handleSubmit}>
        {/* Email */}
        <FormControl id="email" mb={3}>
          <FormLabel>E-posta</FormLabel>
          <Input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && formik.errors.email}
          />
        </FormControl>

        {/* Language */}
        <FormControl id="language" mb={3}>
          {isStudent === "teacher" ? (
            <FormLabel>Öğrettiğiniz dil</FormLabel>
          ) : (
            <FormLabel>Öğrendiğiniz dil</FormLabel>
          )}
          <Select
            name="language"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.language}
          >
            <option
              value=""
              label="Bir dil seçin"
              style={{ color: "black", mt: "3px" }}
            />
            <option
              value="english"
              label="İngilizce"
              style={{ color: "black", mt: "3px" }}
            />
            <option
              value="german"
              label="Almanca"
              style={{ color: "black", mt: "3px" }}
            />
            <option
              value="french"
              label="Fransızca"
              style={{ color: "black", mt: "3px" }}
            />
            <option
              value="spanish"
              label="İspanyolca"
              style={{ color: "black", mt: "3px" }}
            />
            <option
              value="italian"
              label="İtalyanca"
              style={{ color: "black", mt: "3px" }}
            />
            <option
              value="portoguese"
              label="Portekizce"
              style={{ color: "black", mt: "3px" }}
            />
            <option
              value="turkish"
              label="Türkçe"
              style={{ color: "black", mt: "3px" }}
            />
            <option
              value="japanese"
              label="Japonca"
              style={{ color: "black", mt: "3px" }}
            />
            <option
              value="russian"
              label="Rusça"
              style={{ color: "black", mt: "3px" }}
            />
            <option
              value="arabic"
              label="Arapça"
              style={{ color: "black", mt: "3px" }}
            />
            <option
              value="persian"
              label="Farsça"
              style={{ color: "black", mt: "3px" }}
            />
            {/* Add more options as needed */}
          </Select>
        </FormControl>

        {/* Suggestions */}
        <FormControl id="suggestions" mb={4}>
          <FormLabel>Önerileriniz</FormLabel>
          <Input
            type="text"
            name="suggestions"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.suggestions}
          />
        </FormControl>

        <Button type="submit" colorScheme="pink" bg={"pink.500"} width="full">
          Kayıt yap
        </Button>
      </form>
    </Box>
  );
}

export default App;
