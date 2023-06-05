import React, { createContext, useState } from 'react';

interface BetContextData {
  bet: number;
  setBet: (amount: number) => void;
  balance: number;
}

const initContext = {
  bet: 500,
  balance: 5000,
}

const BetContext = createContext<BetContextData | undefined>(undefined);

const BetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bet, setBet] = useState<number>(initContext.bet);
  const [balance, setBalance] = useState<number>(initContext.balance);

  const handleSetBet = (amount: number) => {
    setBet(amount);
  };

  const betContextValue: BetContextData = {
    bet,
    setBet: handleSetBet,
    balance,
  };

  return (
    <BetContext.Provider value={betContextValue}>
      {children}
    </BetContext.Provider>
  );
};

export { BetContext, BetProvider };
