import React, { useRef } from 'react';
import {
    useColorModeValue,
    Button,
    Image,
    Stack,
    Card,
    CardBody,
    Heading,
    Text,
    Divider
} from '@chakra-ui/react';
import sendOrderMail from '../components/order-mail';

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
            bg={useColorModeValue("orange.600", "gray.600")}
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
                    color={useColorModeValue("white", "orange.100")}
                >
                    { name }
                </Heading>
                <Text
                    color={useColorModeValue("white", "orange.100")}
                >
                    { description }
                </Text>
                <Divider />
                <Button
                    onClick={() => sendOrderMail(name)}
                    color={useColorModeValue("orange.100", "orange.100")}
                    _hover={{ textColor: useColorModeValue("orange.600", "orange.100"), bg: useColorModeValue("orange.100", "orange.600") }}
                    mt="2"
                    variant="outline"
                >
                    BESTELLEN
                </Button>
            </Stack>
        </Card>
    );
}

export default Cocktail;
