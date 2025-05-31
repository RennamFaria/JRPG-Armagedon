import { Container, Button } from "@chakra-ui/react";

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
      <Button
        onClick={() => handleLetterClick(letter.id)}
        key={letter.id}
        value={letter.value}
        s
        disable={letter.clicked}
        colorPalette={colorPalette}
        w="40px"
        h="40px"
        m="4px"
      >
        {letter.value}
      </Button>
    );
  });

  return (
    <Container alignItems="center" justifyContent="center">
      {keyboardElement}
    </Container>
  );
}

export default Keyboard;
