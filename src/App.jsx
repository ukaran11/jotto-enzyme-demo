import React from 'react'
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

const App = () => {
  return (
    <div className='App'>
      <h1>Jotto</h1>
      <Congrats success={false}/>
      <GuessedWords guessedWords={[]}/>
    </div>
  )
}

export default App
