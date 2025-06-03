import { Container, HStack, Box, Text } from "@chakra-ui/react";

function GuessGrid({ lettersTried }) {
  const guessesElement = lettersTried.map((letter) => (
    <Box
      w="40px"
      h="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize="xl"
      fontWeight="bold"
      border="2px solid"
      borderColor="gray.500"
      borderRadius="md"
      bg="gray.800"
      color="white"
      boxShadow="sm"
    >
      <Text fontSize="sm" fontWeight="large">
        {letter ? letter : "*"}
      </Text>
    </Box>
  ));
  return (
    <Container display="flex" alignItems="center" justifyContent="center">
      <HStack>{guessesElement}</HStack>
    </Container>
  );
}

export default GuessGrid;
