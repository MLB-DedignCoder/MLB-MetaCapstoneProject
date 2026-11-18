import { HStack } from '@chakra-ui/react';
import Logo from 'src/Logo.svg';

const Header = () => {
    return (
        <nav>
            <HStack spacing="2" alignItems="center">
                <a href="/">
                    <img src={Logo} alt="Little Lemon Logo" />
                </a>
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Menu">Menu</a>
                <a href="#Reservations">Reservations</a>
                <a href="#OrderOnline">Order Online</a>
                <a href="#Login">Login</a>
            </HStack>
        </nav>
    );
};

export default Header;