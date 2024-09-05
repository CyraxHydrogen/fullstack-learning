import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import GroupList from './components/GroupList';
import Profile from './components/Profile';
import TournamentList from './components/TournamentList';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <TournamentList></TournamentList>
        <GroupList></GroupList>
        <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
