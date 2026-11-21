import { Box, HStack } from '@chakra-ui/react';
const HeroSection = () => {
    return (
        <Box>
            <HStack spacing="2" alignItems="center">
               <section>
                    <p>Introduction</p>
                </section>
                <section>
                    <article>
                        <p>Hero Image</p>
                    </article>
                </section>
            </HStack>
         </Box>
    );
};

export default HeroSection;