import { createSlice } from "@reduxjs/toolkit";



type TUser = {
  name: string;
  email: string;
  role: string;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};


const getInitialState = (): TAuthState => {
  // if (typeof window !== 'undefined') {
  //   const storedUser = localStorage.getItem("user");
  //   const storedToken = localStorage.getItem("token");
  //   return {
  //     user: storedUser ? JSON.parse(storedUser) : null,
  //     token: storedToken || null,
  //   };
  // }
  return {
    user: null,
    token: null,
  };
};

const initialState: TAuthState = getInitialState();
 
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      
      // if (typeof window !== 'undefined') {
      //   localStorage.setItem("user", JSON.stringify(user));
      //   localStorage.setItem("token", token);
      // }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    
      if (typeof window !== 'undefined') {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;