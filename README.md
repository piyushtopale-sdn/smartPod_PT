# smartPod-MERN

smartPod is a modular MERN stack project (MongoDB, Express.js, React, Node.js) designed for scalability, maintainability, and reusability.

Outcome-focused delivery units that combine reusable software components. It adopts a pods-based architecture, where each feature is encapsulated as an independent micro frontend (pod).

![Docker](https://img.shields.io/badge/containerized-Docker-blue)
![Node.js](https://img.shields.io/badge/backend-Express-green)
![React](https://img.shields.io/badge/frontend-React-blue)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# 📚 Table of Contents
- [Folder Structure](#-folder-structure)
- [Key Highlights for MERN](#-key-highlights-for-mern)
- [smartPods (Feature Modules)](#-smartpods-feature-modules)
- [Get Started](#-get-started)
- [Tech Stack](#-tech-stack)
- [Sample .env File](#-sample-env-file)
<!-- - [Code Quality](#-code-quality) -->

# 📁 Folder Structure

smartPod/
└── 
    ├── backend/
    │   ├── service-a/
    │   │   ├── Dockerfile
    │   │   ├── index.js
    │   │   └── package.json
    │   └── service-b/
    │       ├── Dockerfile
    │       ├── index.js
    │       └── package.json
    └── frontend/
        ├── component-a/
        │   ├── babel.config.js
        │   ├── package.json
        │   ├── public/
        │   │   └── index.html
        │   ├── src/
        │   │   ├── App.js
        │   │   ├── Bootstrap.js
        │   │   ├── index.js
        │   │   └── logo.svg
        │   └── webpack.config.js
        └── component-b/
            ├── babel.config.js
            ├── package.json
            ├── public/
            │   └── index.html
            ├── src/
            │   ├── App.js
            │   ├── Bootstrap.js
            │   ├── index.js
            │   └── logo.svg
            └── webpack.config.js

# 🧩 Key Highlights for MERN:
- **Frontend (React):** Inside `frontend/` folder.
- **Backend:** Inside `backend/`folder.

# 🧩 smartPods (Feature Modules)
Pods are self-contained feature modules.  

# 🚀 Get Started

```bash
# Run the app
docker compose up --build

# Stop the app
docker compose down
```

# 🛠️ Tech Stack
- **Frontend:** React, Webpack 5, Babel
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Architecture:** Microfrontend (Module Federation), Pod-based
- **Containerization:** Docker, Docker Compose

# 🔐 Sample .env File

```
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
API_GATEWAY_URL=http://localhost:3000
```

<!-- # 🧹 Code Quality
- Linting: ESLint (with Airbnb config recommended)
- Formatting: Prettier
- Commit Convention: Conventional Commits (recommended for CI/CD) -->
