import { Box, VStack, Text } from "@chakra-ui/react";

function Display({ title, bodyText, bgColor }) {
  return (
    <Box width="100%" maxWidth="580px" mx="auto" my={1}>
      <VStack
        bg={bgColor}
        color="white"
        width="100%"
        paddingY={2}
        paddingX={5}
        borderRadius="md"
        boxShadow="lg"
        textAlign="center"
        spacing={1}
      >
        <Text fontSize="xl" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="sd">{bodyText}</Text>
      </VStack>
    </Box>
  );
}

export default Display;
