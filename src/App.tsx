import React from "react";
import AppContainer from "./pages/AppContainer/AppContainer";
import { Providers } from "./providers";

export const App = () => {
  return (
    <Providers>
      <AppContainer />
    </Providers>
  );
};

export default App;
