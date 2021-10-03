import React, { useContext, useState } from "react";

interface IMainContextProvider {
  children: any;
}

const MainContext = React.createContext({
  showAngleModal: false,
  onChangeShowAngleModal: (action: boolean) => {},
});

export const useMainContext = () => {
  return useContext(MainContext);
};

export const MainContextProvider = ({ children }: IMainContextProvider) => {
  const [showAngleModal, setShowAngleModal] = useState(false);

  return (
    <MainContext.Provider
      value={{
        showAngleModal,
        onChangeShowAngleModal: (action) => setShowAngleModal(action),
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
