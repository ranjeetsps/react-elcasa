import { useReducer, createContext, useContext } from "react";

const onlyUser = { username: "ranjeet", password: "ranjeetPassword" };

const initialState = {
  username: "ranjeet",
  password: "ranjeetPassword",
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setUsername":
      return { ...state, username: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "Authenticate":
      return { ...state, isAuthenticated: true };

    default:
      throw new Error("Unknown action type");
  }
}
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleAuthentication(e) {
    e.preventDefault();
    if (!state.username || !state.password) {
      return;
    }
    if (
      state.username === onlyUser["username"] &&
      state.password === onlyUser["password"]
    ) {
      dispatch({ type: "Authenticate" });
    }
  }
  return (
    <AuthContext.Provider value={{ state, handleAuthentication, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    console.log("contex not found");
  }
  return context;
}

export { AuthProvider, useAuth };
