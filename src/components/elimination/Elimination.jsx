import { Container, Box, HStack, Text } from "@chakra-ui/react";

function Elimination({ lifes }) {
  const getTagColors = (index) => {
    const colorMap = {
      "0": { bg: "#E34F26", color: "white" },
      "1": { bg: "#1572B6", color: "white" },
      "2": { bg: "#F7DF1E", color: "black" },
      "3": { bg: "#61DAFB", color: "black" },
      "4": { bg: "#3178C6", color: "white" },
      "5": { bg: "#339933", color: "white" },
      "6": { bg: "#3776AB", color: "white" },
      "7": { bg: "#CC342D", color: "white" },
      "8": { bg: "#6E4C8B", color: "white" },
      // Default colors for other values
      default: { bg: "gray.600", color: "white" },
    };

    return colorMap[index] || colorMap.default;
  };

  const eliminationElement = lifes.map((genre, index) => {
    const colors = getTagColors(genre.index);

    return (
      <Box
        key={index}
        px="12px"
        py="6px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="sm"
        fontWeight="medium"
        borderRadius="4px"
        bg={genre.isDead ? "gray.700" : colors.bg}
        color={genre.isDead ? "gray.400" : colors.color}
        boxShadow="sm"
        minW="fit-content"
        transition="all 0.2s"
        opacity={genre.isDead ? 0.6 : 1}
        _hover={{
          transform: genre.isDead ? "none" : "translateY(-1px)",
          boxShadow: genre.isDead ? "sm" : "md",
        }}
      >
        <Text fontSize="sm" fontWeight="medium">
          {!genre.isDead ? genre.value : "X_X"}
        </Text>
      </Box>
    );
  });

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      maxW="container.lg"
    >
      <HStack spacing={2} flexWrap="wrap">
        {eliminationElement}
      </HStack>
    </Container>
  );
}

export default Elimination;
