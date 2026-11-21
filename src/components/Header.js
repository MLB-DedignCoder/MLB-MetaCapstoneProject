import { Box, HStack } from '@chakra-ui/react';

const Header = () => {
    return (
        <Box as="nav" bg="gray.100" p="4">
            <HStack spacing="4" alignItems="center">
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Menu">Menu</a>
                <a href="#Reservations">Reservations</a>
                <a href="#OrderOnline">Order Online</a>
                <a href="#Login">Login</a>
            </HStack>
        </Box>
    );
};

export default Header;