import * as React from "react";
import MyStack from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./RKT/store";

const App = () => {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};

export default App;
