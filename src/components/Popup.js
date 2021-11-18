import React, { useEffect } from 'react'
import { checkWin } from '../helper/helpers';

//component to display a popup message to the user
const Popup = ( { correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    //if the user has the won the game they see this message
    if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
        finalMessage = "You are Wizard, you won the game";
        playable = false;
    }
    //if the user has lost the game they will see this message
    else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose'){
        finalMessage = "Sorry Muggle, you lost the game";
        finalMessageRevealWord = `the word was: ${selectedWord}`;
        playable = false;
    }

    //after the render set playable 
    useEffect(() => setPlayable(playable));

    //display the popup message
    return (
    <div className="popup-container" style={finalMessage != '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <buttun onClick={playAgain}>Play Again</buttun>
      </div>
    </div>
    )
}

export default Popup
