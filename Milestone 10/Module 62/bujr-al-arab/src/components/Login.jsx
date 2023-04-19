import { Button, Heading, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Auth/ContextAuth';

const Login = () => {
    const {googleLogIn} = useContext(AuthContext)
    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Heading>Login Here</Heading>
            <Button onClick={handleGoogleLogin} colorScheme='blue' variant='outline'><FaGoogle color='blue'/> <Text ml={2}>Login With Google</Text></Button>
        </div>
    );
};

export default Login;