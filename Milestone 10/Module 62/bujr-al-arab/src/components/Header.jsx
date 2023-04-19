import { Box, Flex, Image, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/photo-1602934445884-da0fa1c9d3b3-removebg-preview.png'
import bg from '../assets/photo-1506059612708-99d6c258160e.jpg'
const Header = () => {
    return (
        <Box bgImage={bg} width='100vw' backgroundRepeat='no-repeat' backgroundSize='cover' backgroundBlendMode='soft-light'>
            <Flex alignItems='center' textColor='white' fontWeight='bold' gap={5} py='40px' mx='45px'>
                <Link  to='/'><Image w='60px' src={logo}></Image></Link>
                <Link to='/'><Text>Home</Text></Link>
                <Link to='/login'><Text>Login</Text></Link>
                <Link to='/book'><Text>Book</Text></Link>
            </Flex>
        </Box>
    );
};

export default Header;