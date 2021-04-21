import React from 'react'
import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(6).fill(0));

  const handleVotes = () => {
    let newVotes = [...votes];
    newVotes[selected] += 1;

    setVotes(newVotes);
  }

  const findMostVotes = (arr) => {
    return arr.indexOf(Math.max(...arr))
  }

  return (
    <div>
      <h2>Anecdote of the dat</h2>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <button onClick={handleVotes}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
        next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      <div>
        {anecdotes[findMostVotes(votes)]}
      </div>
    </div>
  )
}

export default App;
