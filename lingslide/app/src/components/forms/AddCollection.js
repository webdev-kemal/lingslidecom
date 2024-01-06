import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  HStack,
  Grid,
  Stack,
  Icon,
  Select,
  Flex,
  IconButton,
  useDisclosure,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useMediaQuery,
} from "@chakra-ui/react";

const AddCollection = ({ isOpen, onClose }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        //  bg="#6184b8"
        h="650px"
        minW="840px"
        my="auto"
        //   rounded="none"
      >
        <ModalHeader
          // color="white"
          fontFamily="League Spartan"
          fontSize={"55px"}
          textAlign={"center"}
          mt="10px"
          mb="-20px"
        >
          koleksiyon oluştur
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody

        //   color="white"
        >
          <Text fontFamily="League Spartan" mt="0px" fontSize={"25px"}>
            Koleksiyonun adını girin
          </Text>
          <Input
            fontWeight={"bold"}
            fontFamily="League Spartan"
            fontSize="30px"
            h="65px"
            rounded="xl"
            mb={3}
          />
          <Text fontFamily="League Spartan" fontSize={"25px"}>
            Temanıza uygun bir emoji seçin
          </Text>

          <Box overflowY={"scroll"} height={"270px"}>
            <Flex alignItems={"center"} justifyContent={"space-around"}>
              <Stack
                spacing={3}
                rounded="lg"
                p={1}
                border="2px solid rgba(0,0,0,0.1)"
              >
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontFamily="League Spartan"
                >
                  Yemek
                </Text>
                <Flex>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🍪
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🍎
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🍦
                  </Button>
                </Flex>
              </Stack>
              <Stack
                spacing={3}
                rounded="lg"
                p={1}
                border="2px solid rgba(0,0,0,0.1)"
              >
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontFamily="League Spartan"
                >
                  Okul
                </Text>
                <Flex>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    📖
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    ✏️
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🏛️
                  </Button>
                </Flex>
              </Stack>
              <Stack
                spacing={3}
                rounded="lg"
                p={1}
                border="2px solid rgba(0,0,0,0.1)"
              >
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontFamily="League Spartan"
                >
                  Duygular
                </Text>
                <Flex>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    😄
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    😢
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    😎
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    😍
                  </Button>
                </Flex>
              </Stack>
            </Flex>
            {/* Second row */}
            <Flex alignItems={"center"} mt={3} justifyContent={"space-around"}>
              <Stack
                spacing={3}
                rounded="lg"
                p={1}
                border="2px solid rgba(0,0,0,0.1)"
              >
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontFamily="League Spartan"
                >
                  Alışveriş
                </Text>
                <Flex>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    👠
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    👜
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    👗
                  </Button>
                </Flex>
              </Stack>
              <Stack
                spacing={3}
                rounded="lg"
                p={1}
                border="2px solid rgba(0,0,0,0.1)"
              >
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontFamily="League Spartan"
                >
                  Doğa
                </Text>
                <Flex>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🌳
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🌸
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🌊
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    ☁️
                  </Button>
                </Flex>
              </Stack>
              <Stack
                spacing={3}
                rounded="lg"
                p={1}
                border="2px solid rgba(0,0,0,0.1)"
              >
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontFamily="League Spartan"
                >
                  Teknoloji
                </Text>
                <Flex>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🖥️
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🚀
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    💡
                  </Button>
                </Flex>
              </Stack>
            </Flex>

            {/* THIRD ROW */}
            <Flex alignItems={"center"} mt={3} justifyContent={"space-around"}>
              <Stack
                spacing={3}
                rounded="lg"
                p={1}
                border="2px solid rgba(0,0,0,0.1)"
              >
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontFamily="League Spartan"
                >
                  Meslekler
                </Text>
                <Flex>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    👩‍🍳
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    👨‍🎨
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    👨‍🏫
                  </Button>
                </Flex>
              </Stack>
              <Stack
                spacing={3}
                rounded="lg"
                p={1}
                border="2px solid rgba(0,0,0,0.1)"
              >
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontFamily="League Spartan"
                >
                  Oyun
                </Text>
                <Flex>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🎲
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    👾
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🎯
                  </Button>
                </Flex>
              </Stack>
              <Stack
                spacing={3}
                rounded="lg"
                p={1}
                border="2px solid rgba(0,0,0,0.1)"
              >
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontFamily="League Spartan"
                >
                  Hayvanlar
                </Text>
                <Flex>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🐶
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🐱
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🐦
                  </Button>
                  <Button size="lg" bg="gray.100" rounded="lg" p={5} m={1}>
                    🐬
                  </Button>
                </Flex>
              </Stack>
            </Flex>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Flex justifyContent="space-between" w="100%">
            <Box>
              <Flex alignItems={"center"}>
                <Text me={2} fontFamily={" League Spartan"} fontWeight={"bold"}>
                  koleksiyon dilini seçin
                </Text>
                <Select variant="filled" w="140px">
                  <option value="english">İngilizce</option>
                  <option value="french">Fransızca</option>
                  <option value="spanish">İspanyolca</option>
                </Select>
              </Flex>
            </Box>
            <Flex>
              <Button colorScheme="gray" mr={2} onClick={onClose}>
                Vazgeç
              </Button>
              <Button colorScheme="blue">Oluştur</Button>
            </Flex>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddCollection;
