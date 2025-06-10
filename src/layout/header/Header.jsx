import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function Header() {
  return (
    <Box as="header" py={4}>
      <VStack spacing={3} textAlign="center">
        <Heading as="h1" size="xl" color="gray.100" fontWeight="bold">
          JRPG: Armagedom
        </Heading>

        <Text color="gray.400" fontSize="lg" maxW="lg">
          Guess the word in under 8 attemps to keep the gaming world safe from
          JRPG's!
        </Text>
      </VStack>
    </Box>
  );
}

export default Header;
