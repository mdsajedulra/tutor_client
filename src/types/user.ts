// types/authTypes.ts
export type loginUserData = {
  email: string, 
  password: string
}

export type TUser = {
    _id: string;
    name: string;
    email: string;
    password?: string;
    image: string;
    role: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    __v?: number;
  };
  
  export type TAuthResponse = {
    success: boolean;
    message: string;
    statusCode: number;
    token: string;
    data: Omit<TUser, 'password'>;
  };
  
  export type TAuthState = {
    user: null | Omit<TUser, 'password'>;
    token: null | string;
  };

  // decoded data type


export type TJwtPayload = {
  email: string;
  exp: number;
  iat: number;
  role: string;
};


export enum UserRole {
  STUDENT = 'student',
  TEACHER = 'tutor',
  ADMIN = 'admin',

}

export type TJwtPayloadWithEnum = {
  email: string;
  exp: number;
  iat: number;
  role: UserRole;
};


export type TTokenValidation = {
  isValid: boolean;
  isExpired: boolean;
  payload?: TJwtPayload;
};

export interface IUser {
  _id: string;
  name: string;
  email: string;
  image?: string; // optional if not always present
  role: 'student' | 'tutor' | 'admin'; // or whatever roles you have
  createdAt: Date;
  updatedAt: Date;
  __v?: number; // optional as it's a version key from MongoDB
}