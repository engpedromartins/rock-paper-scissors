import React from 'react';
import AppBar from './components/Header/Header';
import GlobalStyle from "./styles/global";
import Game from './components/Game/Game';
import { BetProvider } from './contexts/BetContext';


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BetProvider>
        <AppBar />
        <Game />
      </BetProvider>
    </>
  );
};

export default App;
