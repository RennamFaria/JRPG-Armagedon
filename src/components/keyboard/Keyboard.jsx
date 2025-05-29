function Keyboard({letters, handleLetterClick}) {
 
  const keyboardElement = letters.map((letter) => {
    return (
      <button onClick={() => handleLetterClick(letter.id)} key={letter.id} value={letter.value} className="keyboard-button">
        {letter.value}
      </button>
    );
  });

  return <>{keyboardElement}</>;
}

export default Keyboard;