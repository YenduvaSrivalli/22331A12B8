// src/middleware/logger.js
export function logEvent(message, data = {}) {
    const timestamp = new Date().toISOString();
    const logData = { timestamp, message, ...data };
    
    // You could push to localStorage, send to backend, etc.
    // For demo, storing in session (simulate real middleware)
    let logs = JSON.parse(localStorage.getItem("logs") || "[]");
    logs.push(logData);
    localStorage.setItem("logs", JSON.stringify(logs));
  }
  