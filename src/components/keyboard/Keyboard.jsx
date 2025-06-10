import { Container, VStack, HStack, Button, Box } from "@chakra-ui/react";

function Keyboard({ letters, handleLetterClick, isGameOver }) {
  const rows = [
    letters.slice(0, 10), // 10 letters (Q-P)
    letters.slice(10, 19), // 9 letters (A-L)
    letters.slice(19), // Remaining letters (Z-M)
  ];

  return (
    <VStack spacing={2} p={4}>
      {rows.map((row, rowIndex) => (
        <HStack key={rowIndex} spacing={2}>
          {row.map((letter) => {
            let colorPalette;
            if (letter.correct === null) {
              colorPalette = "yellow";
            } else if (letter.correct === true) {
              colorPalette = "green";
            } else if (letter.correct === false) {
              colorPalette = "red";
            }

            return (
              <Button
                key={letter.id}
                onClick={() => handleLetterClick(letter.id)}
                disabled={letter.clicked || isGameOver}
                colorPalette={colorPalette}
                w="48px"
                h="48px"
                fontSize="xl"
                fontWeight="bold"
                borderColor="white"
                borderWidth="2px"
                borderRadius="5px"
                transition="all 0.2s ease-in-out"
                _hover={{
                  transform: "translateY(-3px)",
                  boxShadow: "lg",
                }}
              >
                {letter.value}
              </Button>
            );
          })}
        </HStack>
      ))}
    </VStack>
  );
}

export default Keyboard;
