# MERN Deployment Project

## Description
Ce projet est une application MERN (MongoDB, Express, React, Node.js) déployée sur Vercel.  
Le backend fournit des routes API pour gérer les utilisateurs et le frontend React interagit avec ce backend.

---

## Installation locale

1. **Cloner le projet**
```bash
git clone https://github.com/ASMAA1369/mern-render-deployment.git
cd mern-render-deployment
````

2. **Backend**

```bash
cd backend
npm install
```

* Crée un fichier `.env` avec les variables suivantes :

```
PORT=5001
MONGO_URI=ton_mongodb_uri
```

3. **Frontend**

```bash
cd ../frontend
npm install
```

* Crée un fichier `.env` :

```
VITE_API_URL=https://backend-7t2zz2wi9-asmaa.vercel.app
```

4. **Lancer localement**

* Backend :

```bash
cd backend
npm run dev
```

* Frontend :

```bash
cd frontend
npm run dev
```

* Le projet sera accessible sur : `http://localhost:5173`

---

## Routes API principales

* `GET /api/test` – Vérifie que le backend fonctionne.
* `GET /api/users` – Récupère tous les utilisateurs.
* `POST /api/users` – Crée un utilisateur (envoi JSON `{name, email}`).

---

## Remarques

* Le projet est déployé sur Vercel car j'ai eu un blocage au niveau des autres plateformes AZURE, Render...


---

## Auteur

Jebbar ASMAA


