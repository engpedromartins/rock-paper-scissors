import React, { createContext, useState } from 'react';

interface BetContextData {
  bet: number;
  setBet: (amount: number) => void;
  setBalance: (amount: number) => void;
  balance: number;
  win: number;
  setWin: (amount: number) => void;
}

const initContext = {
  bet: 500,
  balance: 5000,
  win: 0,
}

const BetContext = createContext<BetContextData | undefined>(undefined);

const BetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bet, setBet] = useState<number>(initContext.bet);
  const [balance, setBalance] = useState<number>(initContext.balance);
  const [win, setWin] = useState<number>(initContext.win);

  const handleSetBet = (amount: number) => {
    setBet(amount);
  };

  const betContextValue: BetContextData = {
    bet,
    setBet: handleSetBet,
    setBalance,
    balance,
    win,
    setWin,
  };

  return (
    <BetContext.Provider value={betContextValue}>
      {children}
    </BetContext.Provider>
  );
};

export { BetContext, BetProvider };
