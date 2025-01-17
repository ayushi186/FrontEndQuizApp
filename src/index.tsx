import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import QuestionComp from "./components/QuestionComp";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { LoaderProvider } from "./components/LoaderProvider";
import { store } from "./store";
import { Provider } from "react-redux";
import { ToggleProvider } from "./components/ThemeToggleContext";
import ThemeToggle from "./components/ThemeToggel";
import GlobalBackground from "./components/GlobalBackground";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/Question",
    element: <QuestionComp />,
  },
]);
// declare function RouterProvider(props: RouterProviderProps): React.ReactElement;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ToggleProvider>
      <GlobalBackground>
        <ThemeToggle></ThemeToggle>
        <LoaderProvider>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </LoaderProvider>
      </GlobalBackground>
    </ToggleProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
