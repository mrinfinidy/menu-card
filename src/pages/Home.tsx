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
                imageSrc={jetski.imageSrc}
                name={jetski.name}
                description={jetski.description}
            />
            <Cocktail
                imageSrc={marlis.imageSrc}
                name={marlis.name}
                description={marlis.description}
            />
            <Cocktail
                imageSrc={ryanair.imageSrc}
                name={ryanair.name}
                description={ryanair.description}
            />
            <Cocktail
                imageSrc={broman.imageSrc}
                name={broman.name}
                description={broman.description}
            />
            <Cocktail
                imageSrc={amore.imageSrc}
                name={amore.name}
                description={amore.description}
            />
        </Flex>
    )
};

const barbara = {
    imageSrc: "cocktails/mojito.png",
    name: "Die „Barbara\"",
    description: "Rum, Zucker, Limettensaft, Sodawasser, Minze und Eiswürfel"
    }

const jetski = {
    imageSrc: "cocktails/mojito.png",
    name: "Die „Jetski\"",
    description: "Tequila, Limettensaft, Orangenlikör und Eiswürfel"
}

const marlis = {
    imageSrc: "cocktails/mojito.png",
    name: "Die „Marlis\"",
    description: "Wodka, Limettensaft, Zitronensaft, Zuckersirup, Sodawasser und Eiswürfel"
}

const ryanair = {
    imageSrc: "cocktails/mojito.png",
    name: "Der „Ryanair\"",
    description: "Wodka, Orangensaft, Grenadine, Sodawasser und Eiswürfel"
}

const broman = {
    imageSrc: "cocktails/mojito.png",
    name: "Der „Broman\"",
    description: "Rum, Orangensaft, Ananassaft, Kokosmilch und Eiswürfel"
}

const amore = {
    imageSrc: "cocktails/mojito.png",
    name: "Der „Amore\"",
    description: "Prosecco, Aperol, Sodawasser und Eiswürfel"
}

export default Home;
