"use client";

import { useState } from "react";
import styles from "../styles/mainpage.module.css";

export default function TestErrorComponent() {
  const [showError, setShowError] = useState(false);

  if (showError) {
    throw new Error("Test error from page component!");
  }

  return (
    <div style={{ 
      marginTop: "2rem", 
      padding: "1rem", 
      border: "2px dashed #ff6b6b",
      borderRadius: "8px",
      backgroundColor: "#ffe0e0"
    }}>
      <h3 style={{ color: "#d32f2f" }}>🧪 Testing Error Logging</h3>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>
        Click the button below to test error logging. This will trigger an error boundary
        and logs will be recorded in logs/error.log
      </p>
      <button
        onClick={() => setShowError(true)}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#ff6b6b",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        🔴 Спровокувати помилку
      </button>
    </div>
  );
}
