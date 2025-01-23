import React, { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import Store from "./store/rootStore";
import { StoreContext } from "./store/storeContext";

const store = new Store();

export const Providers: FC = ({ children }: { children: ReactNode }) => {
  store.init();

  return (
    <StoreContext.Provider value={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </StoreContext.Provider>
  );
};
