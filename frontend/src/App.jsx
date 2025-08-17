import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Chargement...");

  useEffect(() => {
    // Appel au backend via la variable d'environnement
    fetch(`${import.meta.env.VITE_API_URL}/api/test`)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur réseau");
        return res.json();
      })
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage(`Erreur : ${err.message}`));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Connexion Frontend ↔ Backend</h1>
      <p>Message backend : {message}</p>
    </div>
  );
}

export default App;
