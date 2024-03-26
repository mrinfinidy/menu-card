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
    imageSrc: "https://img.freepik.com/premium-vector/lemon-drink-cartoon-doodle-art-hand-draw-illustration_1125753-211.jpg?w=740",
    name: "Mojito",
    description: "Rum, Zucker, Limettensaft, Sodawasser, Minze und Eiswürfel"
    }

const margarita = {
    imageSrc: "https://img.freepik.com/free-vector/refreshing-citrus-cocktail-illustration_1308-164569.jpg?w=360&t=st=1711067479~exp=1711068079~hmac=7c1c32d5ec7b35b217d7a82f5838b493cede9fb77d06feae80ddb38c98df1761",    
    name: "Margarita",
    description: "Tequila, Limettensaft, Orangenlikör und Eiswürfel"
}

export default Home;
