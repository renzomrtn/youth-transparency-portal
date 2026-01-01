import { createContext, useContext, useState, ReactNode } from 'react';

interface OriginContextType {
  selectedOrigin: string;
  setSelectedOrigin: (origin: string) => void;
}

const OriginContext = createContext<OriginContextType | undefined>(undefined);

export function OriginProvider({ children }: { children: ReactNode }) {
  const [selectedOrigin, setSelectedOrigin] = useState<string>('');

  return (
    <OriginContext.Provider value={{ selectedOrigin, setSelectedOrigin }}>
      {children}
    </OriginContext.Provider>
  );
}

export function useOrigin() {
  const context = useContext(OriginContext);
  if (context === undefined) {
    throw new Error('useOrigin must be used within an OriginProvider');
  }
  return context;
}
