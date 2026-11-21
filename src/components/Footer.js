import { Box, HStack, Image } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box as="footer" p="4" bg="gray.100">
            <HStack spacing="4" alignItems="center">
                <Image src="Asset 20@4x.png" alt="© 2024 Little Lemon. All rights reserved." height="200px" width="auto" />
                <section>
                    <p>Doormat Navigation</p>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Menu">Menu</a></li>
                        <li><a href="#Reservations">Reservations</a></li>
                        <li><a href="#OrderOnline">Order Online</a></li>
                        <li><a href="#Login">Login</a></li>
                    </ul>
                </section>
                <section>
                    <p>Contact Info</p>
                    <ul>
                        <li>123 Main Street, City, State 12345</li>
                        <li>(123) 456-7890</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </section>
                <section>
                    <p>Social Media Links</p>
                    <ul>
                        <li><a href="https://www.facebook.com/littlelemon">Facebook</a></li>
                        <li><a href="https://www.instagram.com/littlelemon">Instagram</a></li>
                        <li><a href="https://www.x.com/littlelemon">X</a></li>
                    </ul>
                </section>
            </HStack>
         </Box>
    );
};

export default Footer;