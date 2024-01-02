import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useNavigate, useHistory } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/user";
import { IoMdArrowDropdown } from "react-icons/io";

export default function WithSubnavigation() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.user);
  const { loading, error, userInfo } = userLogin;

  return (
    <Box>
      <Flex
        bg={theme === "dark" ? "#1a1e51" : "#1a1e51"}
        color={theme === "dark" ? "white" : "black"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        // borderColor={"pink.400"}
        borderColor={"#1a1e51"}
        align={"center"}
      >
        <Flex
          bgColor="transparent"
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            color={"white"}
            bg="transparent"
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            as={"a"}
            href={"#"}
            mt="6px"
            ms="6px"
            cursor={"pointer"}
            _hover={{ transition: ".2s", transform: "scale(1.05)" }}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"League Spartan"}
            fontWeight="bold"
            fontSize="2xl"
          >
            Lingslide
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            color={"white"}
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            onClick={(e) => {
              e.preventDefault();
              if (userInfo == null) {
                navigate("/register");
              } else {
                return;
                // dispatch(logout());
              }
            }}
          >
            {userInfo ? (
              <Menu>
                <MenuButton rightIcon={<ChevronDownIcon />}>
                  <Flex justifyContent={"center"} alignItems={"center"}>
                    <IoMdArrowDropdown fontSize={"24px"} />
                    {userInfo.email}
                  </Flex>
                </MenuButton>
                <MenuList border="none" bg={"none"}>
                  <MenuItem bg={"#1A1E51"}>Edit Profile</MenuItem>
                  <MenuItem
                    bg={"#1A1E51"}
                    onClick={() => {
                      dispatch(logout());
                      navigate("/register");
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <FormattedMessage id="nav.google" />
            )}
          </Button>
          <Button
            me="6px"
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.500"}
            href={"#"}
            _hover={{
              bg: "pink.600",
            }}
          >
            <FormattedMessage id="nav.support" />
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.100", "gray.200");
  const linkHoverColor = useColorModeValue("gray.300", "gray.400");
  const popoverContentBgColor = "#352a63";

  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Stack spacing={4} direction={"row"}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box
                  as="a"
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Box>
              </PopoverTrigger>
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </Flex>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "#0d0f2a" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"#1a1e51"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack color={"white"} spacing={0} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"white"}>
          {label}
        </Text>
        {children && (
          <Icon
            color={"white"}
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"pink.400"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: <FormattedMessage id="nav.blogs" />,
    children: [
      {
        label: "Yabancı Dil Blogları",
        subLabel: "Ders anlatımlarınız sayfanızda gözüksün",
        href: "/#/blogs",
      },
      {
        label: "İnteraktif Slaytlar",
        subLabel: "Etkileşimi olan slaytlar yaratın ve kayıt alın",
        href: "#",
      },
    ],
  },
  {
    label: <FormattedMessage id="nav.ai" />,
    children: [
      {
        label: "Çalışma Ortamım",
        subLabel: "Notlarınızı özel alanınıza kaydedin",
        href: "/#/demo",
      },
      {
        label: "Pratiğe Dökme",
        subLabel: "Kütüphanedeki kaynakları çekip değiştirin",
        href: "/#/demo",
      },
    ],
  },
  {
    label: <FormattedMessage id="nav.dict" />,
    href: "/#/dictionary",
  },
  // {
  //   label: "SSS",
  //   href: "#",
  // },
];
