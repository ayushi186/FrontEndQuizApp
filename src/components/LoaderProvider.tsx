import React, { ReactNode, createContext, useState, useContext } from "react";
import { ThemeContext } from "./ThemeToggleContext";
import { LoaderWrapper } from "./StyledComp";
import { ILoader, ILoaderContext, LoaderContextProvider } from "../types/types";

export const LoaderContext = createContext<ILoaderContext | undefined>(
  undefined
);

export const LoaderProvider: React.FC<LoaderContextProvider> = ({
  children,
}) => {
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [loaderMessage, setLoaderMessage] = useState<string | undefined>();

  const contextValue: ILoaderContext = {
    showLoader: (message) => {
      setLoaderMessage(message);
      setIsVisible(true);
    },
    hideLoader: () => {
      setIsVisible(false);
    },
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      {isVisible && <Loader message={loaderMessage} theme={theme} />}
      {children}
    </LoaderContext.Provider>
  );
};

export const Loader: React.FC<ILoader> = ({ message, theme }) => {
  return (
    <LoaderWrapper theme={theme}>
      <span className="spinner"></span>
      <span className="loader-message">{message}</span>
    </LoaderWrapper>
  );
};
