import React from 'react';
import { Image, Stack, Card, CardBody, Heading, Text, useColorModeValue } from '@chakra-ui/react';

interface CocktailProps {
    imageSrc: string;
    name: string;
    description: string;
}

const Cocktail: React.FC<CocktailProps> = ({ imageSrc, name, description }) => {
    return (
        <Card
            maxW="sm"
            padding="5"
            my="2"
            bg={useColorModeValue("pink.600", "gray.600")}
        >
            <CardBody>
                <Image
                    src={ imageSrc }
                    alt="Cocktail 1"
                    borderRadius="lg"
                />
            </CardBody>
            <Stack mt="6" spacing="3" align="center" >
                <Heading
                    size="md"
                    color={useColorModeValue("white", "pink.100")}
                >
                    { name }
                </Heading>
                <Text
                    color={useColorModeValue("white", "pink.100")}
                >
                    { description }
                </Text>
            </Stack>
        </Card>
    );
}

export default Cocktail;
