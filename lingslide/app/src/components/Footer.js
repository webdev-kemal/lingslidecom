import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { BiLogoTiktok } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

// import { AppStoreBadge } from "#/components/AppStoreBadge";
// import { PlayStoreBadge } from "#/components/PlayStoreBadge";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href, target }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      target={target}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  const navigate = useNavigate();
  return (
    <Box bg={"#1a1e53"} color={"white"} mt={"300px"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Lingslide</ListHeader>
            <Box as="a" href={"#"}>
              Hakkında
            </Box>
            <Box as="a" href={"/#/blogs"}>
              Blog
            </Box>
            <Box as="a" href={"#"}>
              S.S.S.
            </Box>
            <Box as="a" href={"#"}>
              Yazılım Çözümleri
            </Box>
            <Box as="a" href={"/#/jobs"}>
              Bizimle Çalışın
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Destek</ListHeader>
            <Box as="a" href={"#"}>
              Yardım Merkezi
            </Box>
            <Box as="a" href={"#"}>
              Güvenlik
            </Box>
            {/* <Box as="a" href={"#"}>
              Topluluk Kuralları
            </Box> */}
            <Box as="a" href={"#"}>
              Ulaşım
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Kurallar</ListHeader>
            <Box as="a" href={"#"}>
              Çerez Politikası
            </Box>
            <Box as="a" href={"#"}>
              Gizlilik Politikası
            </Box>
            <Box as="a" href={"#"}>
              Hizmet Şartları
            </Box>
            {/* <Box as="a" href={"#"}>
              Hukuki İşlemler
            </Box> */}
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Bizi takip edin</ListHeader>
            {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Twitter"}
                target="_blank"
                href={"http://twitter.com/lingslide"}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"TikTok"}
                target="_blank"
                href={"http://tiktok.com/@lingslide"}
              >
                <BiLogoTiktok />
              </SocialButton>
              <SocialButton
                target="_blank"
                label={"Instagram"}
                href={"http://instagram.com/lingslide"}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        // borderColor={useColorModeValue("gray.200", "gray.700")}
        borderColor={"transparent"}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>Lingslide 2023</Text>
        </Container>
      </Box>
    </Box>
  );
}
