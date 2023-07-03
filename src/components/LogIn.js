import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./css/auth.module.css";
import { useAuth } from "./contexts/AuthContext";

function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to log in to your account");
    }

    setLoading(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>StudyMonks</div>
      </div>
      <div className={styles.right}>
        <div className={styles.formDiv}>
          <div className={styles.header}>Log In</div>

          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.formField}>
              <label className={styles.label}>Username/Email</label>
              <input
                type="text"
                name="email"
                ref={emailRef}
                className={styles.input}
              />
            </div>

            <div className={styles.formField}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                ref={passwordRef}
                className={styles.input}
              />
            </div>

            {error && (
              <div style={{ color: "red", textAlign: "center", width: "100%" }}>
                {error}
              </div>
            )}

            <button className={styles.btn} type="submit">
              Log In
            </button>

            <div className={styles.redirectAuth}>
              Don't have an account?{" "}
              <Link to="/signup" className={styles.redirectTo}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
