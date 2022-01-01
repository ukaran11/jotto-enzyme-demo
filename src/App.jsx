import React from 'react'
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';

const App = () => {
  return (
    <div data-test="component-app" className='container'>
      <h1>Jotto</h1>
      <Congrats success={true}/>
      <GuessedWords 
        guessedWords={[ 
          { guessedWord: 'train', letterMatchCount: 3} 
        ]}
      />
    </div>
  )
}

export default App
