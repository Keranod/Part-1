import { useState } from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

const Button = (props) => {
  console.log(props);
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  if (props.text === 'positive') {
    return (
        <tr>
          <td>{props.text}</td> 
          <td>{props.value} %</td> 
        </tr>
    )
  }
  
  return (
        <tr>
          <td>{props.text}</td> 
          <td>{props.value}</td> 
        </tr>
  )
}

const Statistics = (props) => {
  if (props.statistics[3] === 0) {
    return (
      <p>No feedback given</p>
    )  
  }
  return (
    <div>
      <StatisticLine text='good' value={props.statistics[0]} />
      <StatisticLine text='neutral' value={props.statistics[1]} />
      <StatisticLine text='bad' value={props.statistics[2]} />
      <StatisticLine text='all' value={props.statistics[3]} />
      <StatisticLine text='average' value={props.statistics[4]} />
      <StatisticLine text='positive' value={props.statistics[5]} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const statisticsValues = [good, neutral, bad, all, average, positive]

  const handleClickGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    const updatedAll = updatedGood + bad + neutral;
    setAll(updatedAll);
    const updateAverage = (updatedGood - bad) / updatedAll;
    setAverage(updateAverage);
    setPositive((updatedGood / updatedAll) * 100);
  };

  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    const updatedAll = good + bad + updatedNeutral;
    setAll(updatedNeutral + good + bad);
    const updateAverage = (good - bad) / updatedAll;
    setAverage(updateAverage);
    setPositive((good / updatedAll) * 100);
  };

  const handleClickBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    const updatedAll = updatedBad + good + neutral;
    setAll(updatedAll);
    const updateAverage = (good - updatedBad) / updatedAll;
    setAverage(updateAverage);
    setPositive((good / updatedAll) * 100);
  };

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
      <Header text="statistics" />
      <Statistics statistics={statisticsValues} />
    </div>
  );
};

export default App;
