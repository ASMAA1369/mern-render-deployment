import mongoose from "mongoose";

// Connexion MongoDB (une seule fois)
if (!mongoose.connection.readyState) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connexion MongoDB réussie"))
    .catch((err) => console.error("❌ Erreur MongoDB :", err));
}

// Modèle User
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const User = mongoose.models.User || mongoose.model("User", UserSchema);

// Route serverless
export default async function handler(req, res) {
  if (req.method === "GET") {
    const users = await User.find();
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
