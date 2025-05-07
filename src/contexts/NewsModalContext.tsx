import { createContext, ReactNode, useContext, useState } from "react";

interface NewsModalType {
  isOpen: boolean;
  toggleModal: () => void;
}
const ModalContext = createContext<NewsModalType>({
  isOpen: false,
  toggleModal: () => {},
});

export const useNewsModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useNewsModal must be used within an ModalProvider");
  }
  return context;
};

export const NewsModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <ModalContext.Provider value={{ isOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
