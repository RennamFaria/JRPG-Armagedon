import { Container, Button, Box } from "@chakra-ui/react";

function Keyboard({ letters, handleLetterClick, isGameOver }) {
  const keyboardElement = letters.map((letter, index) => {
    let colorPalette;
    if (letter.correct === null) {
      colorPalette = "yellow";
    } else if (letter.correct === true) {
      colorPalette = "green";
    } else if (letter.correct === false) {
      colorPalette = "red";
    }

    return (
      <Box key={letter.id}>
        <Button
          key={index}
          onClick={() => {
            handleLetterClick(letter.id);
          }}
          value={letter.value}
          disabled={letter.clicked || isGameOver}   // Block the keyboard is the game is over or already clicked
          colorPalette={colorPalette}
          fontSize="lm"
          boxShadow="sm"
          borderRadius="4px"
          transition="all 0.2s"
          _hover={{
            transform:"translateY(-5px)",
            boxShadow:"sd",
          }}
          w="40px"
          h="40px"
          m="4px"
        >
          {letter.value}
        </Button>
      </Box>
    );
  });

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      {keyboardElement}
    </Container>
  );
}

export default Keyboard;
