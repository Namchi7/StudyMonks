import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./css/header.module.css";
import { useAuth } from "./contexts/AuthContext";

function Header() {
  const { currentUser, logout } = useAuth();
  const user = currentUser ? true : false;
  const [error, setError] = useState();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      if (window.location.pathname === "/candidate-search") navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        StudyMonks
      </Link>
      <div className={styles.navLinks}>
        <Link
          to={user ? "/candidate-search" : "/login"}
          className={styles.cSearch}
        >
          Candidate Search
        </Link>

        {!user ? (
          <div className={styles.auth}>
            <Link
              to="/login"
              className={`${styles.authBtn} ${styles.loginBtn}`}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className={`${styles.authBtn} ${styles.signupBtn}`}
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className={styles.auth}>
            <div
              className={`${styles.authBtn} ${styles.logoutBtn}`}
              onClick={(e) => handleLogout(e)}
            >
              Log Out
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
