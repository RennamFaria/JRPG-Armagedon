import { Container, HStack, Box, Text } from "@chakra-ui/react";

function GuessGrid({ word, lettersTried, isGameLost }) {
  const guessesElement = word.split("").map((letter, index) => {
    const isLetterTried = lettersTried.includes(letter);
    const textColor = isGameLost && !isLetterTried ? "red.500" : "white";

    return (
      <Box
        key={index}
        w="40px"
        h="40px"
        p="4px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="xl"
        fontWeight="bold"
        border="2px solid"
        borderColor="gray.500"
        borderRadius="md"
        bg="gray.800"
        color={textColor}
        boxShadow="sm"
      >
        <Text fontSize="sm" fontWeight="large">
          {isGameLost || isLetterTried ? letter : "*"}
        </Text>
      </Box>
    );
  });
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      paddingTop={2}
      paddingBottom={10}
      maxWidth="600px"
    >
      <HStack>{guessesElement}</HStack>
    </Container>
  );
}

export default GuessGrid;
