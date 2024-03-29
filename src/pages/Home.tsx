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
    imageSrc: "cocktails/barbara.png",
    name: "Die „Barbara\"",
    description: "Tequila, Orangensaft, Zitronensaft, Grenadine und Eiswürfel"
    }

const jetski = {
    imageSrc: "cocktails/jetski.png",
    name: "Die „Jetski\"",
    description: "Vodka, Red Bull, Maracujasaft, Limettensaft und Rohrzucker"
}

const marlis = {
    imageSrc: "cocktails/marlis.png",
    name: "Die „Marlis\"",
    description: "Vodka, Rum, Blue Curacao, Ananassaft und Limettensaft"
}

const ryanair = {
    imageSrc: "cocktails/ryanair.png",
    name: "Der „Ryanair\"",
    description: "Rum, Pfirsichlikör, und Limettensaft"
}

const broman = {
    imageSrc: "cocktails/broman.png",
    name: "Der „Broman\"",
    description: "Tequila, Grapfruitsaft und Limettensaft"
}

const amore = {
    imageSrc: "cocktails/amore.png",
    name: "Der „Amore\"",
    description: "Whiskey, Zitronensaft, Rohrzucker und Eiweiß"
}

export default Home;
