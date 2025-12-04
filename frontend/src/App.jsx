import { useEffect, useState } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`${backendUrl}/api/hello`)
      .then(r => r.json())
      .then(d => setMessage(d.message))
      .catch(() => setMessage("Error"));
  }, []);

  return (
    <h1 style={{ fontFamily: "sans-serif" }}>{message}</h1>
  );
}

export default App;

