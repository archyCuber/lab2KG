import React, { useContext, useState } from "react";

interface IMainContextProvider {
  children: any;
}

const MainContext = React.createContext({
  showAngleModal: false,
  showRotatePointModal: false,
  onChangeShowAngleModal: (action: boolean) => {},
  onChangeShowRotatePointModal: (action: boolean) => {},
});

export const useMainContext = () => {
  return useContext(MainContext);
};

export const MainContextProvider = ({ children }: IMainContextProvider) => {
  const [showAngleModal, setShowAngleModal] = useState(false);
  const [showRotatePointModal, setShowRotatePointModal] = useState(false);

  return (
    <MainContext.Provider
      value={{
        showAngleModal,
        showRotatePointModal,
        onChangeShowAngleModal: (action) => setShowAngleModal(action),
        onChangeShowRotatePointModal: (action) =>
          setShowRotatePointModal(action),
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
