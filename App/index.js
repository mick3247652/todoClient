import React from "react";
import { PersistGate } from "redux-persist/integration/react";

import { AlertProvider } from "./components/Alert";
import { Provider } from "react-redux";
import { store, persistor } from "./config/store";

import Home from "./screens/Home";

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AlertProvider>
        <Home />
      </AlertProvider>
    </PersistGate>
  </Provider>
);
