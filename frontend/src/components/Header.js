import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Heading,
  Box,
  Icon,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiShoppingBag, HiUser, HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { logout } from "../actions/userAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="ButtonFace"
      w="100%"
      position="fixed"
      top="0"
      zIndex="99999"
    >
      <Heading
        as="h1"
        fontSize='4xl'
        fontWeight="bold"
        size="md"
        letterSpacing="md"
        color="orange.500"
      >
        <Link
          as={RouterLink}
          to="/"
          _hover={{ color: "blackAlpha", textDecor: "none", opacity: '0.8' }}
        >
          Shopzy
        </Link>
      </Heading>
      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} w="6" h="6" color="white" />
      </Box>
      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: "3", md: "0" }}
      >
        <Link
          as={RouterLink}
          to="/cart"
          color="black"
          fontSize="sm"
          letterSpacing="wide"
          textTransform="uppercase"
          mr="5"
          display="flex"
          fontWeight="bold"
          alignItems="center"
          _hover={{ color: "blackAlpha" }}
        >
          <Icon as={HiShoppingBag} w="4" h="4" mr="1" />
          Cart
        </Link>
        {userInfo ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoChevronDown />}
              _hover={{ textDecor: "none", }}
            >
              {userInfo.name}
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/profile">
                Profile
              </MenuItem>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Link
            as={RouterLink}
            to="/login"
            color="black"
            fontSize="sm"
            letterSpacing="wide"
            textTransform="uppercase"
            mr="5"
            display="flex"
            fontWeight="bold"
            alignItems="center"
            _hover={{ color: "blackAlpha" }}
          >
            <Icon as={HiUser} w="4" h="4" mr="1" />
            Login
          </Link>
        )}
        {/* Admin Menu */}
        {userInfo && userInfo.isAdmin && (
          <Menu>
            <MenuButton
              ml="5"
              color="black"
              fontSize="sm"
              fontWeight="semibold"
              as={Link}
              textTransform="uppercase"
              _hover={{ textDecoration: "none", }}
            >
              Manage <Icon as={IoChevronDown} />
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/admin/userlist">
                All Users
              </MenuItem>
              <MenuItem as={RouterLink} to="/admin/productlist">
                All Products
              </MenuItem>
              <MenuItem as={RouterLink} to="/admin/orderlist">
                All Orders
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Flex>
  );
};
export default Header;
