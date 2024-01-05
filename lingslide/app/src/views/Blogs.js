import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import {
  Box,
  Heading,
  Container,
  Grid,
  GridItem,
  Text,
  Button,
  Stack,
  Icon,
  createIcon,
  Badge,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import { BsCheck2All, BsArrowRight } from "react-icons/bs";

const Blogs = () => {
  const { theme } = useContext(ThemeContext);

  const [isDesktop] = useMediaQuery("(min-width: 600px)");

  const [selectedTab, setTab] = useState(0);

  const tabInfo = () => {
    if (selectedTab === 0) {
      return (
        <>
          <Heading fontSize={"lg"} mb={2}>
            Seanslı slayt oluşturma
          </Heading>
          <Text mb={5}>
            Slaytın seans tabanlı olması, slayt açıldığında belli bir sürede
            tamamlanıp teslim edilmesine işaret eder. Öğrenciler slaytlarınıza
            girip, quizleri ve görevleri tamamlar. Slaytlarınız ödev niteliği
            taşır: interaktif element ve widgetler ile slaytınızı
            zenginleştirin, öğrencilerinize anında pratik yapma olanağı
            sağlayın.
          </Text>

          <Heading fontSize={"lg"} mb={2}>
            İnteraktif öğeler ve quiz ekleme
          </Heading>
          <Text mb={5}>
            Slaytların belli sayfalarına quiz sorusu ekleyebilirsiniz.
            Öğrenciler sonraki sayfaya geçmeden önce soruyu cevaplayarak
            bildiklerini pekiştirebilir. Hatta slayt bittiğinde, öğrenci "slaytı
            bitirdim" sinyalini göndermeden bir quizi daha tamamlamasını daha
            tabi tutabilirsiniz.
          </Text>

          <Heading fontSize={"lg"} mb={2}>
            Ödev sistemi ve Lingslide{" "}
            <Text as="span" color="pink.400">
              Insights
            </Text>
          </Heading>
          <Text>
            Öğrencilerinize tamamlaması için ödev gönderin. Öğrencilerinizi bir
            sınıfta toplayın ve ilerlemelerini takip edin. Öğrencilerin
            tamamladığı slaytlarınızı ve gösterdiği performansı görüntüleyin.
            Slaytınız başında geçirilen süreyi, quizlerdeki yanıtlarını ve hangi
            slaytı ne zaman tamamladığını görün. Öğrenci slaytı tamamladığında,
            sonuçları ismiyle beraber size ulaşır. Hangi sayfada daha çok vakit
            geçirdiğini, hangi soruları yanlış yaptığını ise{" "}
            <strong>Lingslide</strong>{" "}
            <Text as="span" fontWeight={"bold"} color="pink.400">
              Insights
            </Text>{" "}
            hesaplayıp size gösterir. Slaytlarınızı 'tamamlayan' öğrencilerin
            verileri güvenle slaytınızda saklanır.
          </Text>
        </>
      );
    }
    if (selectedTab === 1) {
      return (
        <>
          <Heading fontSize={"lg"} mb={2}>
            Slaytlar ile para kazanma ve ders kaydetme
          </Heading>
          <Text>
            Slaytınızı kayda alıp para kazanabilirsiniz! Slaytlarınızı tarayıcı
            üzerinizden ekran kaydı ile çekip bir kurs videosuna
            dönüştürebilirsiniz. <strong>Lingslide</strong> ile ilk bir saatlik
            içeriğinizi ürettiğinizde ödeme alırsınız. Tarayıcınızdan ses ve
            mikrofon izinlerini sağladığınızda <strong>Lingslide</strong> size
            kaydetme olanağını sunar.
          </Text>
        </>
      );
    }
    if (selectedTab === 2) {
      return (
        <>
          <Heading fontSize={"lg"} mb={2}>
            Otomatik slayt oluşturma ve görsel yaratma
          </Heading>
          <Text>
            Yapay zeka araçlarımızdan yararlanıp ders konusuna veya notlarınıza
            göre slaytlar oluşturabilir, quizler yaratabilirsiniz!{" "}
            <strong>Lingslide Ücretsiz</strong> üyelikte mevcut değildir.
          </Text>
        </>
      );
    }
    if (selectedTab === 3) {
      return (
        <Text>
          Slaytlarınız Microsoft PowerPoint dosyası olarak dışa aktarılabilir.
          Daha sonra sınıfınızda .pptx uzantılı dosyanız ile sunum
          yapabilirsiniz. Ayrıca hali hazırda yaratmış olduğumuz tasarımlara da
          göz atmanızı öneririz!
        </Text>
      );
    }
  };

  return (
    <div>
      {" "}
      {/* language switcher */}
      <Container
        color={"white"}
        fontFamily={"League Spartan"}
        minW="100%"
        minH="98vh"
        // bg={theme === "dark" ? "#13163c" : "#13163c"}
      >
        <Stack
          mx={{ base: "4%", md: "23%" }}
          as={Box}
          //   textAlign={"center"}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 20, md: 20 }}
        >
          <Box
            bg={"rgba(255,255,255,1)"}
            w="100%"
            h={"27px"}
            m="0px"
            pos={"relative"}
            display="flex" // Make this Box a flex container
            alignItems="center"
            color={"black"}
          >
            <Box
              pos={"absolute"}
              left={"0%"}
              h={"100%"}
              w="5px"
              bg="pink.400"
            ></Box>

            <Flex align="center" justifyContent="space-between" w="100%">
              <Text ms={3} mt={1} fontWeight={"700"}>
                Güncelleme: 12.10.2023
              </Text>
              <Text me={3} mt={1} fontWeight={"700"}>
                Lingslide Beta
              </Text>
            </Flex>
          </Box>
          <Heading size="xl">Bizi neler bekliyor?</Heading>

          <Grid templateColumns={isDesktop ? "3fr 3fr 3fr 3fr" : "12fr "}>
            <GridItem
              pos="relative"
              width={"95%"}
              py={3}
              background={"rgba(0,0,0,0.7)"}
              cursor={"pointer"}
              _hover={{
                background: "rgba(255,255,255,0.2)",
                transition: "all 0.1s",
              }}
              onClick={() => {
                setTab(0);
              }}
            >
              <Text fontWeight={"bold"}>Öğrencilerinizi takip edin</Text>
              <Box
                w="100%"
                pos="absolute"
                bg={selectedTab === 0 ? "pink.400" : "white"}
                bottom="0"
                h={"2px"}
              ></Box>
            </GridItem>
            <GridItem
              pos="relative"
              width={"95%"}
              py={3}
              background={"rgba(0,0,0,0.7)"}
              cursor={"pointer"}
              _hover={{
                background: "rgba(255,255,255,0.2)",
                transition: "all 0.1s",
              }}
              onClick={() => {
                setTab(1);
              }}
            >
              <Text fontWeight={"bold"}>Slaytlardan para kazanma*</Text>
              <Box
                w="100%"
                pos="absolute"
                bg={selectedTab === 1 ? "pink.400" : "white"}
                bottom="0"
                h={"2px"}
              ></Box>
            </GridItem>
            <GridItem
              pos="relative"
              width={"95%"}
              py={3}
              background={"rgba(0,0,0,0.7)"}
              cursor={"pointer"}
              _hover={{
                background: "rgba(255,255,255,0.2)",
                transition: "all 0.1s",
              }}
              onClick={() => {
                setTab(2);
              }}
            >
              <Text fontWeight={"bold"}>Yapay Zeka Slaytlar</Text>
              <Box
                w="100%"
                pos="absolute"
                bg={selectedTab === 2 ? "pink.400" : "white"}
                bottom="0"
                h={"2px"}
              ></Box>
            </GridItem>
            <GridItem
              pos="relative"
              width={"95%"}
              // mt={3}
              py={3}
              background={"rgba(0,0,0,0.7)"}
              cursor={"pointer"}
              _hover={{
                background: "rgba(255,255,255,0.2)",
                transition: "all 0.1s",
              }}
              onClick={() => {
                setTab(3);
              }}
            >
              <Text fontWeight={"bold"}>PowerPoint'e aktarım</Text>
              <Box
                w="100%"
                pos="absolute"
                bg={selectedTab === 3 ? "pink.400" : "white"}
                bottom="0"
                h={"2px"}
              ></Box>
            </GridItem>
          </Grid>
          <Box>{tabInfo()}</Box>
          <Flex wrap="wrap" gap={2}>
            <Text
              _hover={{
                cursor: "pointer",
                bg: "white",
                color: "black",
                transition: ".2s",
              }}
              px={2}
              py={1}
              border="1px solid white"
            >
              {selectedTab === 0 && "Öğrenci Takibi"}
              {selectedTab === 1 && "Ders Kaydetme"}
              {selectedTab === 2 && "GPT-4 Yapay Zeka"}
              {selectedTab === 3 && "Hazır Şablonlar"}
            </Text>
            {selectedTab === 0 && (
              <Text
                _hover={{
                  cursor: "pointer",
                  bg: "white",
                  color: "black",
                  transition: ".2s",
                }}
                px={2}
                py={1}
                border="1px solid white"
              >
                Ödev Sistemi
              </Text>
            )}
            <Box
              border="1px solid white"
              px={2}
              py={1}
              display="flex"
              alignItems="center"
              _hover={{
                cursor: "pointer",
                bg: "white",
                color: "black",
                transition: ".2s",
              }}
            >
              <Text fontWeight="bold" me={1}>
                Lingslide{" "}
              </Text>
              {selectedTab === 0 && (
                <Text me={1} fontWeight="bold" color={"green.300"}>
                  Ücretsiz
                </Text>
              )}
              {(selectedTab === 1 ||
                selectedTab === 2 ||
                selectedTab === 3) && (
                <Text me={1} fontWeight="bold" color={"red.300"}>
                  Eğitmen
                </Text>
              )}
              <BsCheck2All />
            </Box>
            {selectedTab === 1 && (
              <Box
                border="1px solid white"
                px={2}
                py={1}
                display="flex"
                alignItems="center"
                _hover={{
                  cursor: "pointer",
                  bg: "white",
                  color: "black",
                  transition: ".2s",
                }}
              >
                <Text fontWeight="bold" me={1}>
                  Lingslide{" "}
                </Text>
                <Text me={1} fontWeight="bold" color={"blue.200"}>
                  Blogs
                </Text>
                <BsCheck2All />
              </Box>
            )}
            {selectedTab === 0 && (
              <Box
                border="1px solid white"
                px={2}
                py={1}
                display="flex"
                alignItems="center"
                _hover={{
                  cursor: "pointer",
                  bg: "white",
                  color: "black",
                  transition: ".2s",
                }}
              >
                <Text fontWeight="bold" me={1}>
                  Lingslide{" "}
                </Text>
                <Text me={1} fontWeight="bold" color={"pink.300"}>
                  Insights
                </Text>
                <BsCheck2All />
              </Box>
            )}
          </Flex>
          {/* <Heading size="lg">Forumlar</Heading> */}
          <Flex
            align="center"
            _hover={{
              cursor: "pointer",
              ".hoverIcon": {
                marginLeft: "10px",
                transition: "all ease-out 0.2s",
              },
              ".dahaFazlasi": {
                textDecoration: "underline",
              },
            }}
            transition="all ease-out 0.2s"
          >
            <Text className="dahaFazlasi">Daha fazlası ve satış ortaklığı</Text>
            &nbsp;
            <BsArrowRight
              className="hoverIcon"
              transition="all ease-out 0.2s"
            />
          </Flex>
        </Stack>
      </Container>
    </div>
  );
};

export default Blogs;
