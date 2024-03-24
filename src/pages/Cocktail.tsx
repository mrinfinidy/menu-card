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
    Divider,
    useToast
} from '@chakra-ui/react';
import sendOrderMail from '../components/order-mail';

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
                    onClick={() => handleOrder(name)}
                    color={useColorModeValue("orange.100", "orange.100")}
                    _active={{ textColor: useColorModeValue("orange.600", "orange.100"), bg: useColorModeValue("orange.100", "orange.600") }}
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
