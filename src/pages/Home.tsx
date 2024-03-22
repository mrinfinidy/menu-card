import { 
    Flex,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import ThemeToggleButton from '../components/theme-toggle-button';
import Cocktail from './Cocktail';

const Home = () => {

    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            w="100%"
            h="100%"
        >
            <Flex direction="row" mt="2">
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    mb="4"
                    color={useColorModeValue("pink.600", "pink.100")}
                >
                    Familienbesäufnis
                </Text>
                <ThemeToggleButton />
            </Flex>
            <Cocktail
                imageSrc={mojito.imageSrc}
                name={mojito.name}
                description={mojito.description}
            />
            <Cocktail
                imageSrc={margarita.imageSrc}
                name={margarita.name}
                description={margarita.description}
            />
        </Flex>
    )
};

const mojito = {
    imageSrc: "https://img.freepik.com/premium-vector/lemon-drink-cartoon-doodle-art-hand-draw-illustration_1125753-211.jpg?w=740",
    name: "Mojito",
    description: "The Mojito is a traditional Cuban highball. Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar, lime juice, soda water, and mint. Its combination of sweetness, citrus, and herbaceous mint flavors is intended to complement the rum, and has made the mojito a popular summer drink."
    }

const margarita = {
    imageSrc: "https://img.freepik.com/free-vector/refreshing-citrus-cocktail-illustration_1308-164569.jpg?w=360&t=st=1711067479~exp=1711068079~hmac=7c1c32d5ec7b35b217d7a82f5838b493cede9fb77d06feae80ddb38c98df1761",    
    name: "Margarita",
    description: "A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice."
}

export default Home;
