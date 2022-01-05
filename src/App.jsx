import React, { useEffect, useState } from 'react'

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';
import Input from './Input';
import { getSecretWord } from './actions';

const App = () => {
  // console.log("test change for new branch context-start");
  const [secretWord, setSecretWord] = useState();
  const success = false;
  const guessedWords  = [];

  useEffect(() => {
    getSecretWord();
  }, [])

  return (
    <div data-test="component-app" className='container'>
      <h1>Jotto</h1>
      <Congrats success={success}/>
      <Input success={success} secretWord={secretWord} />
      <GuessedWords 
        guessedWords={guessedWords}
      />
    </div>
  )
}

export default App
