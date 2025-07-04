# smartPod-MERN

smartPod is a modular MERN stack project (MongoDB, Express.js, React, Node.js) designed for scalability, maintainability, and reusability.

Outcome-focused delivery units that combine reusable software components. It adopts a pods-based architecture, where each feature is encapsulated as an independent micro frontend (pod).

![Docker](https://img.shields.io/badge/containerized-Docker-blue)
![Node.js](https://img.shields.io/badge/backend-Express-green)
![React](https://img.shields.io/badge/frontend-React-blue)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# 📚 Table of Contents
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Key Highlights for MERN](#-key-highlights-for-mern)
- [smartPods (Feature Modules)](#-smartpods-feature-modules)
- [Get Started](#-get-started)
- [Sample .env File](#-sample-env-file)
- [Contributing](#-contributing)
<!-- - [Code Quality](#-code-quality) -->

# 🛠️ Tech Stack
- **Frontend:** React `18.x`, Webpack 5, Babel
- **Backend:** Node.js `18.x`, Express.js
- **Database:** MongoDB
- **Architecture:** Microfrontend (Module Federation), Pod-based
- **Containerization:** Docker, Docker Compose

# 📁 Folder Structure

<details>
<summary>smartPod/</summary>

```
├── .gitignore
├── README.md
├── docker-compose.yaml
```

<details>
<summary><code>backend/</code></summary>

<details>
<summary><code>service-a/</code></summary>

- src/  
- index.js  
- Dockerfile  

</details>

<details>
<summary><code>service-b/</code></summary>

- src/  
- index.js  
- Dockerfile  

</details>

</details>

<details>
<summary><code>frontend/</code></summary>

<details>
<summary><code>component-a/</code></summary>

- src/  
- assets/  
- tests/  
- Dockerfile  

</details>

<details>
<summary><code>component-b/</code></summary>

- src/  
- assets/  
- tests/  
- Dockerfile  

</details>

</details>

</details>


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

# 🔐 Sample .env File

```
NODE_ENV=development
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret

```

# 🤝 Contributing
- Keep UI components generic and reusable
- Encapsulate feature logic within pods
- Follow consistent naming conventions across both frontend (React) and backend (Node.js):

<details>
<summary><strong>📌 Naming Conventions (React + Node.js)</strong></summary>

| Type                  | Convention            | React Example        | Node.js Example         |
|-----------------------|-----------------------|-----------------------|--------------------------|
| Component / Class     | PascalCase            | `UserCard.jsx`        | `UserService.js`         |
| Hook (React only)     | use + camelCase       | `useAuth.js`          | —                        |
| Function / Method     | camelCase             | `handleClick()`       | `getUserData()`          |
| Variable / Const      | camelCase             | `userName`            | `dbClient`               |
| Constant              | UPPER_SNAKE_CASE      | `MAX_ATTEMPTS`        | `DB_URL`                 |
| File Name             | kebab-case            | `user-profile.jsx`    | `user-service.js`        |
| Folder Name           | kebab-case            | `user-profile/`       | `middleware/`            |
| Redux Slice File      | camelCase             | `authSlice.js`        | —                        |
| Route File            | kebab-case (plural)   | —                     | `users.js`               |
| Environment Variable  | UPPER_SNAKE_CASE      | `REACT_APP_API_URL`   | `JWT_SECRET`             |
| Middleware Function   | camelCase             | —                     | `authMiddleware()`       |
| Config File           | kebab-case            | —                     | `db-config.js`           |

</details>

<!-- # 🧹 Code Quality
- Linting: ESLint (with Airbnb config recommended)
- Formatting: Prettier
- Commit Convention: Conventional Commits (recommended for CI/CD) -->
