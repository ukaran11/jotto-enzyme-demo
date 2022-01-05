import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';
import Input from './Input';
import { getSecretWord } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const success = useSelector(state => state.success);
  const guessedWords = useSelector(state => state.guessedWords);
  const secretWord = useSelector(state => state.secretWord);
  // test 
  useEffect(() => {
    dispatch(getSecretWord());
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
