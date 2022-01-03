import React, { useEffect } from 'react'

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';
import Input from './Input';
import { getSecretWord } from './actions';

const App = () => {
  // console.log("test change for new branch context-start");
  const success = false;
  const secretWord = 'party';
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
