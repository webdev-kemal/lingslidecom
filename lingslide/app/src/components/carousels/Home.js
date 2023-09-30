import React from "react";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { Box, Heading, Text } from "@chakra-ui/react";
import Flicking, { MoveEvent, WillChangeEvent } from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

export default function CaptionCarousel() {
  // const _plugins = [new AutoPlay()];
  const _plugins = [new AutoPlay({ duration: 2600, stopOnHover: true })];

  const cards = [
    {
      title: "1. Adım",
      description: "Havalı bir slayt oluşturun",
    },
    {
      title: "2. Adım",
      description: "Slaytınıza interaktif bileşenler ekleyin",
    },
    {
      title: "3. Adım",
      description: "Tarayıcı üzerinden sesli ders kaydı çekin",
    },
    {
      title: "4. Adım",
      description: 'Öğrencilerinize "çözmeleri" için slaytı gönderin',
    },
    {
      title: "Daha fazlası",
      description: "Öğrencilerinizi yakından takip edin",
    },
    {
      title: "Daha fazlası",
      description: "Slaytınızı excel veya pptx dosyası olarak indirin",
    },
  ];

  return (
    <Box w="60%" mx="auto" minH="150px">
      <Flicking
        gap={20}
        overflow="scroll"
        circular={true}
        horizontal={true}
        plugins={_plugins}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            p={6}
            me={9}
            border="2px solid white"
            borderRadius={"md"}
            boxShadow="lg"
            bg="transparent"
            color="white"
            width={"98%"}
            height={"300px"}
          >
            <Heading size="md" mb={4}>
              {card.title}
            </Heading>
            <Text>{card.description}</Text>
          </Box>
        ))}
      </Flicking>
    </Box>
  );
}
