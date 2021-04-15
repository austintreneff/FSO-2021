import React, { useState } from 'react';

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  const all =  good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all);


  return (
    <div>
      <h2>give feedback</h2>
      <Button text="good" handleClick={handleGoodClick}/>
      <Button text="neutral" handleClick={handleNeutralClick}/>
      <Button text="bad" handleClick={handleBadClick}/>
      <h2>statistics</h2>
      {all > 0
        ?  <table>
              <tbody>
                <Statistic text="good" value={good}/>
                <Statistic text="neutral" value={neutral}/>
                <Statistic text="bad" value={bad}/>
                <Statistic text="all" value={all}/>
                <Statistic text="average" value={average.toFixed(2)}/>
                <Statistic text="positive" value={`${(positive * 100).toFixed(2)}%`}/>
              </tbody>
            </table>
        : <div>No feedback given</div>
      }
    </div>
  )
}

export default App