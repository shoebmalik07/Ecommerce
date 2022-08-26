import {Link as RouterLink, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Flex, Heading, Box, Icon, Link,Button,Menu,MenuButton,MenuItem,MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { HiShoppingBag, HiUser, HiOutlineMenuAlt3 } from 'react-icons/hi';
import {IoChevronDown} from 'react-icons/io5'
import {logout} from '../actions/userAction'


const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [show, setShow] = useState(false)

    const userLogin = useSelector((state)=>state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = ()=>{
        dispatch(logout())
        navigate('/')
    }

    return (
        <Flex
            as='header'
            align='center'
            justify='space-between'
            wrap='wrap'
            py='6'
            px='6'
            bgColor='gray.800'
            w='100%'
            position='fixed'
            top='0'
            zIndex='99999'
        >
            <Heading
                as='h1'
                fontWeight='bold'
                size='md'
                letterSpacing='md'
                color='whiteAlpha.800'
            >
                <Link as={RouterLink} to = '/' _hover={{ color: 'gray.500', textDecor: 'none' }}>
                    RST STORE
                </Link>
            </Heading>
            <Box
                display={{ base: 'block', md: 'none' }}
                onClick={() => setShow(!show)}
            >
                <Icon as={HiOutlineMenuAlt3} w='6' h='6' color='white' />
            </Box>
            <Box
                display={{ base: show ? 'block' : 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                mt={{ base: '3', md: '0' }}
            >
                <Link
                    as={RouterLink}
                    to="/cart"
                    color='whiteAlpha.600'
                    fontSize='sm'
                    letterSpacing='wide'
                    textTransform='uppercase'
                    mr='5'
                    display='flex'
                    fontWeight='bold'
                    alignItems='center'
                    _hover={{ color: 'whiteAlpha.800' }}
                >
                    <Icon as={HiShoppingBag} w='4' h='4' mr='1' />
                    Cart
                </Link>
                {
                    userInfo?(
                        <Menu>
						<MenuButton
							as={Button}
							rightIcon={<IoChevronDown />}
							_hover={{ textDecor: 'none', opacity: '0.7' }}>
							{userInfo.name}
						</MenuButton>
						<MenuList>
							<MenuItem as={RouterLink} to='/profile'>
								Profile
							</MenuItem>
							<MenuItem onClick={logoutHandler}>Logout</MenuItem>
						</MenuList>
					</Menu>
                    ):(
                        <Link
                    as={RouterLink}
                    to="/login"
                    color='whiteAlpha.600'
                    fontSize='sm'
                    letterSpacing='wide'
                    textTransform='uppercase'
                    mr='5'
                    display='flex'
                    fontWeight='bold'
                    alignItems='center'
                    _hover={{ color: 'whiteAlpha.800' }}
                >
                    <Icon as={HiUser} w='4' h='4' mr='1' />
                    Login
                </Link>
                    )
                }
                
            </Box>
        </Flex>
    )
}
export default Header