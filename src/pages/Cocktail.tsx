import React from 'react';
import {
    useColorModeValue,
    Button,
    Image,
    Stack,
    Card,
    CardBody,
    Heading,
    Text,
    Divider,
    useToast,
    Box
} from '@chakra-ui/react';
import sendOrderMail from '../components/order-mail';
import "@fontsource/oswald"
import "@fontsource/raleway"

interface CocktailProps {
    imageSrc: string;
    name: string;
    description: string;
}

const Cocktail: React.FC<CocktailProps> = ({ imageSrc, name, description }) => {
    const toast = useToast();

    const handleOrder = (name: string) => {
        sendOrderMail(name)
        .then(() => {
            toast({
                title: `${name} bestellt`,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        }) 
        .catch((error) => {
            console.error(error);
            toast({
                title: "Fehler",
                description: `${name} konnte nicht bestellt werden`,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        });
    }

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
                    alt="Cocktail image"
                    borderRadius="lg"
                />
            </CardBody>
            <Stack mt="6" spacing="3" align="center" >
                <Heading
                    size="md"
                    color={useColorModeValue("white", "orange.200")}
                    fontFamily="Oswald"
                >
                    { name }
                </Heading>
                <Text
                    color={useColorModeValue("white", "orange.200")}
                    fontFamily="Raleway"
                >
                    { description }
                </Text>
                <Divider />
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue("orange.100", "gray.700")}
                >
                    <Button
                        onClick={() => handleOrder(name)}
                        colorScheme="orange" 
                        variant="outline"
                    >
                        BESTELLEN
                    </Button>
                </Box>
            </Stack>
        </Card>
    );
}

export default Cocktail;
