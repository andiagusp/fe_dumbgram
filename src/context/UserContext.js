import { createContext, useReducer } from 'react';

export const UserContext = createContext();

const initial = {
  isLogin: false,
  user: {}
}

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'login_success':
    case 'login':
      return {
        isLogin: true,
        user: payload
      }
    case 'logout':
      return {
        isLogin: false,
        user: {}
      }
    default:
      throw new Error();
  }
}

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <UserContext.Provider value={ [state, dispatch] }>
      { children }
    </UserContext.Provider>
  );
}
