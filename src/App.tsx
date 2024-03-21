import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
    return (
        <ChakraProvider>
            <div>
                <h1>React App</h1>
            </div>
        </ChakraProvider>
    );
}

export default App;
