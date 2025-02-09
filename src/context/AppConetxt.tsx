import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
  selectedFriend: string | null;
  setSelectedFriend: (name: string) => void;
}

export const AppContext = createContext<AppContextProps | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ selectedFriend, setSelectedFriend }}>
      {children}
    </AppContext.Provider>
  );
};
