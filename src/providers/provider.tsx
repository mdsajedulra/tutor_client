"use client";

import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import UserProvider from "@/context/UserContext";

import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/sheared/home/Navbar";


const index = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      
      <UserProvider>
        <Toaster position="top-center" />
        <NextTopLoader />

        <Provider store={store}> 
        <Navbar />
          
          {children}</Provider>
      </UserProvider>
 
    </div>
  );
};

export default index;
