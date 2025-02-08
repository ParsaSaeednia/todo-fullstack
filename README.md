# Todo Fullstack Application

Welcome to the **Todo Fullstack** project! This project is a full-stack application with a **Vue 3 frontend** and a **Bun.js backend**. The app allows users to manage their todo lists efficiently with a seamless, modern UI and scalable backend API.

## Table of Contents

- [Overview](#overview)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Overview

The Todo Fullstack project is a complete, scalable solution for managing todos with a modern tech stack. It uses **Vue 3** and **Vite** for the frontend, and the backend is structured for easy integration with a database, providing essential CRUD functionality.

## Frontend Setup

The frontend is built using **Vue 3** and uses **Vite** for fast development and building, with **Bun** as the package manager for optimized performance.

### Prerequisites

- **Bun** (v0.6.0 or higher) – Follow the [Bun installation guide](https://bun.sh) if you haven’t installed it yet.
- **Node.js** (v18 or higher)

### Installation

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies using Bun:

   ```bash
   bun install
   ```

3. To start the development server, run:
   ```bash
   bun run dev
   ```

This will start the Vue application in development mode with hot-reloading enabled.

### Available Scripts

- `dev`: Starts the development server with Vite.
- `build`: Builds the app for production.
- `preview`: Preview the built app.

## Backend Setup

The backend provides the API endpoints to manage your todo list. It integrates with a mongoDB database and exposes routes for creating, reading, updating, and deleting todos.

### Prerequisites

- **Node.js** (v18 or higher)
- **bun** or **yarn** or **pnpm** or **npm**

### Installation

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   bun install
   ```

3. To start the backend server, run:
   ```bash
   bun server.ts
   ```

This will start the backend server, listening on the configured port (I used 3000).

## Technologies

- **Frontend**:

  - Vue 3
  - Vite
  - Pinia
  - Axios
  - Bootstrap 5
  - TypeScript

- **Backend**:
  - Bun
  - Express
  - Mongoose

## Installation

Follow these steps to get the application running locally.

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-fullstack.git
   cd todo-fullstack
   ```

2. Install dependencies for both frontend and backend:

   - Frontend:
     ```bash
     cd frontend
     bun install
     ```
   - Backend:
     ```bash
     cd ../backend
     bun install
     ```

3. Run the frontend and backend servers:
   - Frontend:
     ```bash
     bun run dev
     ```
   - Backend:
     ```bash
     bun server.ts
     ```

Your full-stack application should now be up and running locally!

## Usage

- Open your browser and navigate to the frontend (usually at `http://localhost:5173`).
- Interact with the todo application by adding, editing, or deleting tasks.
- The backend API will handle the requests and manage the todo data.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Parsa Saeidnia](https://github.com/ParsaSaeednia)
