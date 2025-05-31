import { useState } from "react";

import { getRandomWord } from "@/utils/utils";
import { nanoid } from "nanoid";

import Elimination from "../../components/elimination/Elimination";
import GuessGrid from "../../components/guessGrid/GuessGrid";
import Keyboard from "../../components/keyboard/Keyboard";

function Main() {
  const [letters, setLetters] = useState(() => createLetters());
  // when click a letter, will save here
  //every time that create a snew game will pick a new word and set the max value of guess
  const [guess, setGuess] = useState(() => setMaxGuess());
  const [lifes, setLifes] = useState(() => createLifes());

  function createLetters() {
    const layoutQWERTY = Array.from("QWERTYUIOPASDFGHJKLZXCVBNM");
    return layoutQWERTY.map((letter) => ({
      id: nanoid(),
      value: letter,
      clicked: false,
      correct: null, // null = yellow, true = green, false = red
    }));
  }

  function setMaxGuess() {
    const word = getRandomWord();
    const len = word.length;
    const triedVec = Array(len).fill('');
    
    return({ word: word, length: len, lettersTried: triedVec });
  }

  function createLifes() {}




  //To DO:
  //arruma a logica do correct ou nao correct
  function handleLetterClick(id) {
    const value = letters.find((letter) => letter.id === id)?.value;
    console.log(value);

    setLetters((oldLetters) => {
      const newLetters = oldLetters.map((letter) =>
        letter.id === id
          ? {
              ...letter,
              clicked: true,
              correct: Math.random() > 0.5 ? true : false,
            }
          : letter
      );
      console.log("Updated letters:", newLetters); // Debug log
      return newLetters;
    });
  }

  return (
    <main>
      <p>Thats the main</p>
      <Elimination />
      <GuessGrid length={guess.length} lettersTried={guess.lettersTried}/>
      <Keyboard letters={letters} handleLetterClick={handleLetterClick} />
    </main>
  );
}

export default Main;
