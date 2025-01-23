import { ConfigProvider } from "antd";
import React from "react";
import AppContainer from "./pages/AppContainer/AppContainer";
import { Providers } from "./providers";

export const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0D74AC",
        },
      }}
    >
      <Providers>
        <AppContainer />
      </Providers>
    </ConfigProvider>
  );
};

export default App;
