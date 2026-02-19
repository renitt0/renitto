# Minimal Portfolio

A lightweight, editorial-style portfolio website built with React, Vite, and Tailwind CSS v4.

## Tech Stack

- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS v4
- **Hosting:** Optimized for Firebase Hosting
- **Language:** TypeScript

## Project Structure

- `src/components/`: Reusable UI components (Hero, About, etc.)
- `src/index.css`: Global styles, Tailwind configuration, and custom animations.
- `firebase.json`: Firebase Hosting configuration.

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    ```
    The output will be in the `dist` folder.

## Deployment to Firebase

1.  **Install Firebase tools:**
    ```bash
    npm install -g firebase-tools
    ```

2.  **Login to Firebase:**
    ```bash
    firebase login
    ```

3.  **Initialize Firebase (if not already):**
    ```bash
    firebase init hosting
    ```
    - Select "Use an existing project" or "Create a new project".
    - Public directory: `dist`
    - Configure as a single-page app: `Yes`
    - Set up automatic builds and deploys with GitHub? `No` (optional)

4.  **Deploy:**
    ```bash
    npm run build
    firebase deploy
    ```
