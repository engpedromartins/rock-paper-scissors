import React from 'react';
import AppBar from './components/Header/Header';
import GlobalStyle from "./styles/global";
import Game from './components/Game/Game';


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Game />
    </>
  );
};

export default App;
