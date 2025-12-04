import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`/api/proxy`)
      .then(r => r.json())
      .then(d => setMessage(d.message))
      .catch(() => setMessage("Error Fetching Proxy"));
  }, []);

  return (
    <h1 style={{ fontFamily: "sans-serif" }}>{message}</h1>
  );
}

export default App;

