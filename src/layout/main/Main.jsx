import { useState } from "react";
import { nanoid } from "nanoid";
import { Container, Button } from "@chakra-ui/react";
import Confetti from "react-confetti";

import { getRandomWord } from "@/utils/utils";
import Display from "../../components/display/Display";
import Elimination from "../../components/elimination/Elimination";
import GuessGrid from "../../components/guessGrid/GuessGrid";
import Keyboard from "../../components/keyboard/Keyboard";

const Main = () => {
  const [letters, setLetters] = useState(() => createLetters());
  const [guess, setGuess] = useState(() => createGuess());
  const [lifes, setLifes] = useState(() => createLifes());

  //Variables

  // If left just one genre in lifes, you lost the game
  const isGameLost = lifes.filter((genre) => !genre.isDead).length <= 1;
  // If all got correct all the letters of the guess, you wind the game
  const isGameWon = guess.word == guess.lettersTried.join("");

  function createLetters() {
    const layoutQWERTY = Array.from("QWERTYUIOPASDFGHJKLZXCVBNM");
    return layoutQWERTY.map((letter) => ({
      id: nanoid(),
      value: letter,
      clicked: false,
      correct: null,
    }));
  }

  function createGuess() {
    const word = getRandomWord();
    const len = word.length;
    const triedVec = Array(len).fill("");
    return { word: word, length: len, lettersTried: triedVec };
  }

  function createLifes() {
    const genres = [
      "Metroidvania",
      "Card Game",
      "FPS",
      "Puzzle",
      "MOBA",
      "Roguelike",
      "Battle Royal",
      "Fighting",
      "JRPG",
    ];
    return genres.map((genre, index) => ({
      id: nanoid(),
      value: genre,
      isDead: false,
      index: index, // index start with 0
    }));
  }

  const updateGuessedLetters = (letter) => {
    let flag = false;
    const wordArray = guess.word.split("");
    const lettersTriedArray = guess.lettersTried;

    wordArray.forEach((char, index) => {
      if (char.toUpperCase() === letter.toUpperCase()) {
        flag = true;
        lettersTriedArray[index] = char;
      }
    });

    if (flag) {
      setGuess((prevGuess) => ({
        ...prevGuess,
        lettersTried: lettersTriedArray,
      }));
      return true;
    } else return false;
  };

  const updateLifes = (qnt = -1) => {
    //Find the first's genre that is not dead, find in crescent order of index as default
    const remainingGenres = lifes.filter((genre) => !genre.isDead);
    const genresToUpdate = remainingGenres.slice(0, Math.abs(qnt));

    setLifes((prevGenres) =>
      prevGenres.map((genre) =>
        genresToUpdate.find((g) => g.id === genre.id)
          ? { ...genre, isDead: true }
          : genre
      )
    );
  };

  const handleLetterClick = (id) => {
    const value = letters.find((letter) => letter.id === id)?.value;
    const boolean = updateGuessedLetters(value);

    if (boolean === false) {
      updateLifes(-1);
    }

    setLetters((prevLetters) => {
      const newLetters = prevLetters.map((letter) =>
        letter.id === id
          ? {
              ...letter,
              clicked: true,
              correct: boolean,
            }
          : letter
      );
      return newLetters;
    });
  };

  function startNewGame(){
    setLetters(() => createLetters())
    setGuess(() => createGuess())
    setLifes(() => createLifes())
  }

  function renderGameStatus() {
    if (isGameLost) {
      return (
        <Display
          tittle={"YOU LOST THE GAME"}
          bodyText={"You lost haha, womp womp, loser stupid bitxch"}
          bgColor={"Red"}
          letterColor={"White"}
        ></Display>
      );
    } else if (isGameWon) {
      return (
        <>
          <Confetti recycle={false} numberOfPieces={1000} />
          <Display
          tittle={"YOU WIN THE GAME"}
          bodyText={"Good one budy! You are the best of then all my slay queen 💅"}
          bgColor={"Green"}
          letterColor={"White"}
        ></Display>
        </>
      );
    } else {
      return null;
    }
  }

  return (
    <main>
      {renderGameStatus()}
      <Elimination lifes={lifes} />
      <GuessGrid
        word={guess.word}
        lettersTried={guess.lettersTried}
        isGameLost={isGameLost}
      />
      <Keyboard
        letters={letters}
        handleLetterClick={handleLetterClick}
        isGameOver={isGameLost || isGameWon}
      />
      {isGameLost || isGameWon ? (
        <Container
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={4}
        >
          <Button onClick={startNewGame}>New Game</Button>
        </Container>
      ) : null}
    </main>
  );
};

export default Main;
