import React from 'react'

//component to display the blank letters of the selected word
const Word = ({ selectedWord, correctLetters }) => {
    return (
        <div className="word">
            {selectedWord.split('').map( (letter, i) => {
                return (
                    <span className="letter" key={i}>
                        {correctLetters.includes(letter) ? letter : ''}
                    </span>
    
                )

            })}
          
        </div>
    )
}

export default Word
