import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import Navigator from "./config/routes";

import { AlertProvider } from "./components/Alert";
import { Provider } from "react-redux";
import { store, persistor } from "./config/store";

import Home from "./screens/Home";
import ToDo from "./screens/ToDo";

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AlertProvider>
      <Navigator />
      </AlertProvider>
    </PersistGate>
  </Provider>
);
