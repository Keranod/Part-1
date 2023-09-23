import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return (
      <button onClick={props.handleClick}>{props.text}</button>
  )
}

const AnecdoteWithMostVotes = (props) => {
  let points = 0
  let highestVotesIndex = 0
  props.votes.forEach((element, index) => {
    if (element > points) {
      points = element
      highestVotesIndex = index
    }
  }
  )
  return (
    <div>
      {props.anecdotes[highestVotesIndex]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const n = anecdotes.length

  const initialArray = Array(n).fill(0)

  const [points, setPoints] = useState(initialArray)
  //console.log(points)

  const handleNextAnecdoteClick = () => {
    const anecdotesLength = anecdotes.length
    const randomInt = Math.floor(Math.random() * (anecdotesLength - 0) + 0)
    //console.log(randomInt)
    setSelected(randomInt)
  };

  const handleVoteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    //console.log(points)
  };

  return (
    <div>
      <Header text='Anecdote of the day' />
      {anecdotes[selected]} <br></br>
      has {points.at(selected)} votes<br></br>
      <Button handleClick={handleVoteClick} text={'vote'} />
      <Button handleClick={handleNextAnecdoteClick} text={'next anecdote'} />
      <Header text='Anecdote with most votes' />
      <AnecdoteWithMostVotes votes={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App