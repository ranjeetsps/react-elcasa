import styles from "./Login.module.css";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const { state, handleAuthentication, dispatch } = useAuth();
  const navigate = useNavigate();

  const { username, password, isAuthenticated } = state;

  useEffect(
    function () {
      console.log(isAuthenticated, "-");
      if (isAuthenticated) {
        navigate("/travel/cities");
      }
    },
    [isAuthenticated, navigate]
  );

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleAuthentication}>
        <h2 className={styles.loginTitle}>Login</h2>

        <div className={styles.formField}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              dispatch({ type: "setUsername", payload: e.target.value });
            }}
            required
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) =>
              dispatch({ type: "setPassword", payload: e.target.value })
            }
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
