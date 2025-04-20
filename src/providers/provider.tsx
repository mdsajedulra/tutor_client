"use client";

import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import UserProvider from "@/context/UserContext";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

const index = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="Light"
        enableSystem
        disableTransitionOnChange
      >
        <UserProvider>
          <Toaster position="top-center" />
          <NextTopLoader />

          <Provider store={store}> {children}</Provider>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
};

export default index;
