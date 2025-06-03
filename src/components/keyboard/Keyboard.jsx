import { Container, Button, Box } from "@chakra-ui/react";

function Keyboard({ letters, handleLetterClick }) {
  const keyboardElement = letters.map((letter) => {
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
          onClick={() => {
            handleLetterClick(letter.id);
          }}
          value={letter.value}
          disabled={letter.clicked}
          colorPalette={colorPalette}
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
