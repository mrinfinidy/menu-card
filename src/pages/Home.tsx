import { 
    Flex,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from '../components/theme-toggle-button';
import Cocktail from './Cocktail';
import "@fontsource/great-vibes";

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
                    color={useColorModeValue("orange.600", "orange.200")}
                >
                    Familienbesäufnis
                </Text>
                <ThemeToggleButton />
            </Flex>
            <Text
                fontFamily="Great Vibes"
                mb="2"
                color={useColorModeValue("orange.600", "orange.200")}
            >
                „Marlenes und Amons Empfehlung"
            </Text>
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
    imageSrc: "cocktails/mojito.png",
    name: "Mojito",
    description: "Rum, Zucker, Limettensaft, Sodawasser, Minze und Eiswürfel"
    }

const margarita = {
    imageSrc: "cocktails/margarita.png",
    name: "Margarita",
    description: "Tequila, Limettensaft, Orangenlikör und Eiswürfel"
}

export default Home;
