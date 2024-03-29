import { 
    Flex,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from '../components/theme-toggle-button';
import Cocktail from './Cocktail';
import "@fontsource/great-vibes";
import "@fontsource/anton";

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
                    fontFamily="Anton"
                >
                    FAMILIENBESÄUFNIS
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
                imageSrc={barbara.imageSrc}
                name={barbara.name}
                description={barbara.description}
            />
            <Cocktail
                imageSrc={margarita.imageSrc}
                name={margarita.name}
                description={margarita.description}
            />
        </Flex>
    )
};

const barbara = {
    imageSrc: "cocktails/mojito.png",
    name: "Die \„Barbara\"",
    description: "Rum, Zucker, Limettensaft, Sodawasser, Minze und Eiswürfel"
    }

const margarita = {
    imageSrc: "cocktails/mojito.png",
    name: "Margarita",
    description: "Tequila, Limettensaft, Orangenlikör und Eiswürfel"
}



export default Home;
