// frontend/server.js
import express from "express";
// import { GoogleAuth } from "google-auth-library";

const backendUrl = process.env.VITE_BACKEND_URL || "http://localhost:3001";
const app = express();

// statyczny frontend
app.use(express.static("dist")); // Vite build output

app.get("/api/proxy", async (req, res) => {
  try {
    // const auth = new GoogleAuth();
    // const client = await auth.getIdTokenClient(backendUrl);

    // const response = await client.request({ url: `${backendUrl}/api/hello` });
    const response = await fetch(`${backendUrl}/api/hello`);
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Backend request failed" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Frontend server listening on ${PORT}`));

