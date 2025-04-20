"use client"

import { Provider } from "react-redux";
import { store } from "./store";

const index = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Provider store={store}> {children}</Provider>
    </div>
  );
};

export default index;
