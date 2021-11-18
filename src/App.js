//For help creating this game I made use of Youtube
//Here is a link to the video: https://www.youtube.com/watch?v=jj0W8tYX_q8
import React, { useState, useEffect } from 'react';
import './App.css';

//import the components
import Header from './components/Header';
import Hangman from './components/Hangman';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import { showNotification as show } from './helper/helpers';
import Popup from './components/Popup';
import Rules from './components/Rules';
import Notification from './components/Notification';


//array of Harry Potter themed words
const words = ['azkaban', 'dumbledore', 
'sirius','dementor', 'draco','dobby',
'hermione', 'gryffindor', 'harry', 'hogwarts', 'hagrid',
'hufflepuff', 'muggle','snape','slytherin', 'quidditch', 'ravenclaw', 'ron', 'magic', 'voldermort', 
'spell', 'wand', 'broom', 'wizard'];


//select a random word
let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {
  //declaring state
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);


 //function to handle the event listener
  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode} = event;
      //if statement to check if the key is a letter
        if ( playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          //if statement to check if the selected word includes the letter that is entered
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter]);
            } else {
              //show notification that letter has been entered twice
              show(setShowNotification);
            }
            //add the letter that was entered into wrong letter
          } else {
            if (!wrongLetters.includes(letter)) {
                setWrongLetters(wrongLetters => [...wrongLetters, letter]);
            } else {
              //show notofication that the letter has been entered twice
              show(setShowNotification);
            }
          }
        }
      }
      //event listener
      window.addEventListener('keydown', handleKeydown);

      //function to clean up the event listener
      return () => window.removeEventListener('keydown', handleKeydown);

  }, [correctLetters, wrongLetters, playable]);

  //function to reset the game for the user to play again
  function playAgain(){
    setPlayable(true);

    //reset the arrays
    setCorrectLetters([]);
    setWrongLetters([]);
    //randomly choose the new word
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];

  }
  
  //display the components
  return (
    <>
    <Header />
    <div className="game-container">
      <Hangman wrongLetters={wrongLetters} />
      <WrongLetters wrongLetters={wrongLetters}/>
      <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
    </div>
    <Rules />
    <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} 
          selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNotification={showNotification} />
     
    </>
  );
}

export default App;
