import {useState} from 'react'
import { nanoid } from "nanoid";

import Elimination from "../../components/elimination/Elimination"
import GuessGrid from "../../components/guessGrid/GuessGrid"
import Keyboard from "../../components/keyboard/Keyboard" 

function Main () {
  const [letters, setLetters] = useState(() => createLetters())
  // when click a letter, will save here
  //every time that create a new game will pick a new word and set the max value of guess
  const [guess, setGuess] = useState(() => setMaxGuess());  

  function newWord() {

  }

  function setMaxGuess() {
    
  }

  function createLetters() {
    const layoutQWERTY = Array.from('QWERTYUIOPASDFGHJKLZXCVBNM');
    return layoutQWERTY.map(letter => ({
      id: nanoid(),
      value: letter
    }));
  }

  function handleLetterClick(id) {
    const value = letters.find(letter => letter.id === id)?.value
    console.log(value)
  }

  return(
    <main>
      <p>Thats the main</p>
      <Elimination />
      <GuessGrid />
      <Keyboard 
        letters={letters} handleLetterClick={handleLetterClick} 
      />
    </main>
  )
}

export default Main