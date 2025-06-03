import { useState } from "react";
import { getRandomWord } from "@/utils/utils";
import { nanoid } from "nanoid";
import Elimination from "../../components/elimination/Elimination";
import GuessGrid from "../../components/guessGrid/GuessGrid";
import Keyboard from "../../components/keyboard/Keyboard";

const Main = () => {
  const [letters, setLetters] = useState(() => createLetters());
  const [guess, setGuess] = useState(() => setMaxGuess());
  const [lifes, setLifes] = useState(() => createLifes());

  function createLetters() {
    const layoutQWERTY = Array.from("QWERTYUIOPASDFGHJKLZXCVBNM");
    return layoutQWERTY.map((letter) => ({
      id: nanoid(),
      value: letter,
      clicked: false,
      correct: null,
    }));
  }

  function setMaxGuess() {
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
    const remainingGenres = lifes.filter(genre => !genre.isDead);
    const genresToUpdate = remainingGenres.slice(0, Math.abs(qnt));

    setLifes((prevGenres) => 
      prevGenres.map(genre => 
        genresToUpdate.find(g => g.id === genre.id)
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

  // If all the genres in lifes is dead, you lost the game
  const lostGame = lifes.every((genre) => genre.isDead)

  // If all got correct all the letters of the guess, you wind the game
  const winGame = guess.word == guess.lettersTried.join('')

  return (
    <main>
      <p>Thats the main</p>
      {lostGame ? (<h1>YOU LOST THE GAME</h1>) : null}
      {winGame ? (<h1>YOU WoN THE GAME</h1>) : null}
      <Elimination lifes={lifes} />
      <GuessGrid lettersTried={guess.lettersTried} />
      <Keyboard letters={letters} handleLetterClick={handleLetterClick} />
    </main>
  );
};

export default Main;
