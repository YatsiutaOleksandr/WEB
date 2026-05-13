"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Логуємо в консоль
    console.error(
      JSON.stringify({
        level: "error",
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
      })
    );

    // Відправляємо помилку на сервер
    fetch("/api/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: error.message,
        stack: error.stack,
      }),
    }).catch((err) => console.error("Failed to send error log:", err));
  }, [error]);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Сталася помилка</h1>
      <p>Спробуйте оновити сторінку або повернутися пізніше.</p>
      <button 
        onClick={reset}
        style={{
          padding: "0.5rem 1rem",
          cursor: "pointer",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
        }}
      >
        Спробувати ще раз
      </button>
    </main>
  );
}
