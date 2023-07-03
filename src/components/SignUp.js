import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./css/auth.module.css";
import { useAuth } from "./contexts/AuthContext";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/login");
    } catch {
      setError("Failed to create an account");
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
          <div className={styles.header}>Sign Up</div>

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

            <div className={styles.formField}>
              <label className={styles.label}>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                ref={confirmPasswordRef}
                className={styles.input}
              />
            </div>

            {error && (
              <div style={{ color: "red", textAlign: "center", width: "100%" }}>
                {error}
              </div>
            )}

            <button disabled={loading} className={styles.btn} type="submit">
              Sign Up
            </button>

            <div className={styles.redirectAuth}>
              Already have an account?{" "}
              <Link to="/login" className={styles.redirectTo}>
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
