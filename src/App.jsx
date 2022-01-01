import React from 'react'
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';
import Input from './Input';

const App = () => {

  const success = false;
  const secretWord = 'party';
  const guessedWords  = [];

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
