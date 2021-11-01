import React from 'react';
import './App.scss';
import ListCards from './ListCards/ListCards';
import Title from './Title/Title';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Details from './Details/Details'

function App() {
  const [listHeros, setListHeros] = useState([])
  const [cardWasChosen, setCardWasChosen] = useState(-1)

  useEffect(() => {
    axios.get('https://60dff0ba6b689e001788c858.mockapi.io/heroes')
      .then((res) => {
        setListHeros(res.data)
      })
  },[])

  return (
    <div className="App">
      <Title />
      <ListCards listHeros={listHeros} setListHeros={setListHeros} cardWasChosen={cardWasChosen} setCardWasChosen={setCardWasChosen} />
      <Details listHeros={listHeros} setListHeros={setListHeros} cardWasChosen={cardWasChosen} />
    </div>
  );
}

export default App;
