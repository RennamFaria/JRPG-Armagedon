import { Container, VStack, Box, Text } from "@chakra-ui/react";

function Display({ tittle, bodyText, bgColor, letterColor }) {
  return (
    <Container display="flex" alignItems="center" justifyContent="center" >
      <VStack bg={bgColor} rounded="md" boxShadow='xs'>  
        {/* //make it better */}
        <Text textStyle="2xl" fontWeight="bold" color={letterColor}>{tittle}</Text>
        <Text color={letterColor}>{bodyText}</Text>
      </VStack>
    </Container>
  );
}

export default Display;
