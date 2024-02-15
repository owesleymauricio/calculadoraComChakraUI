'use client'

import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  Grid,
  theme,
  Input,
  Flex,
} from '@chakra-ui/react';

function Calculator() {
  // Estado para armazenar a expressão
  const [expression, setExpression] = useState('');
  

  // Função para lidar com o clique em um botão
  const handleButtonClick = (value: any) => {
    setExpression(expression + value);
  };

  // Função para calcular a expressão
  const handleCalculate = () => {
    try {
      setExpression(eval(expression)); // Usando eval() para calcular a expressão
    } catch (error) {
      setExpression('Error'); // Se houver um erro, exibe "Error"
    }
  };

  // Função para limpar a expressão
  const handleClear = () => {
    setExpression('');
  };

 

  return (
    <Flex
    border={'1px solid white'}
    borderRadius={'5px'}
    maxW={'300px'}
    marginLeft={'auto'}
    marginRight={'auto'}
    marginTop={'40px'}
    justify={'center'}
    align={'center'}
    >
    <Box p={4}>
      {/* Input que exibe a expressão atual */}
      <Input
        variant="filled"
        mb={4}
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      {/* Grade para os botões */}
      <Grid templateColumns="repeat(4, 2fr)" gap={4}>
        {/* Mapeando os botões numéricos e operadores */}
        {['7', '8', '9', '/'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
        {['.', '0', '=', '+'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
        {/* Botões adicionais */}
        <Button onClick={handleClear}>
          Clear
        </Button>
        <Button onClick={handleCalculate}>=</Button>
    
      </Grid>
    </Box>
    </Flex>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Calculator />
    </ChakraProvider>
  );
}

export default App;
