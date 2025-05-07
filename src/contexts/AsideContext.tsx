import { createContext, ReactNode, useContext, useState } from "react";

interface AsideContextType {
  isOpened: boolean;
  toggleAside: () => void;
}
export const AsideContext = createContext<AsideContextType>({
  isOpened: false,
  toggleAside: () => {},
});

export const useAside = (): AsideContextType => {
  const context = useContext(AsideContext);
  if (!context) {
    throw new Error("useAside must be used within an AsideProvider");
  }
  return context;
};

export const AsideProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleAside = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  return (
    <AsideContext.Provider value={{ isOpened, toggleAside }}>
      {children}
    </AsideContext.Provider>
  );
};
