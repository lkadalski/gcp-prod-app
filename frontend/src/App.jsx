import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3001/api/hello")
      .then(r => r.json())
      .then(d => setMessage(d.message))
      .catch(() => setMessage("Error"));
  }, []);

  return (
    <h1 style={{ fontFamily: "sans-serif" }}>{message}</h1>
  );
}

export default App;

