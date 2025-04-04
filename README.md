# To-Do App Project Overview
Assignment by QuadB Tech . Submitted on 26/03/2025
* Live Link :- https://todoquadbtechmanash.netlify.app

# Technologies Used
1/ React: Built using functional components and hooks for state and effect management.

2/ Tailwind CSS: Used for styling and making the UI fully responsive.

3/ Redux: Handles state management, including tasks and authentication.

4/ Redux Thunk: Manages asynchronous actions like API calls.

5/ ShadCN UI: Provides modern UI components for better design consistency.

6/ Google Authentication: Ensures secure login and logout functionality.

7/ Axios: Fetches user profile picture and email after authentication.

8/ Weather API Integration (openweathermap.org): Displays real-time weather for outdoor tasks.

9/ Local Storage: Saves tasks and authentication data for persistence.

10/ Error Handling: Manages API errors gracefully for a smooth user experience.


# Key Features & Logic - 

1/ Task Management ---
- Users can add, delete, and prioritize tasks.
- Tasks are categorized as Indoor or Outdoor and stored using Redux for state management.
- Data persistence is handled via local storage.
- If user is Loged In then only he/she can add the task otherwise it will open Google Authentication Dialog .

2/ Weather Integration (For Outdoor Tasks) ---
- When a task is marked Outdoor, the app fetches real-time weather data using a Weather API (openweathermap.org).
- Uses Axios to fetch temperature and weather conditions and display them with the task.

3/ Google Authentication for secure login ---
- Secure login and logout via Google OAuth.
- Uses Axios to fetch user details (profile picture, email) after login.

4/ State Management (Using Redux) ---
- Redux Toolkit & Redux Thunk manage tasks and API calls efficiently.
- Asynchronous actions handle API calls, ensuring smooth UI updates.

5/ Responsive Design ---
- Built using Tailwind CSS & ShadCN UI for a clean, modern UI.
- Uses CSS Flexbox for a fully responsive experience across all screen sizes.

6/ Error Handling ---
- API requests are wrapped in try-catch blocks to handle errors gracefully.
- User-friendly messages are displayed in case of network failures or API errors.

# Images for all screen 
![Screenshot 2025-03-27 004025](https://github.com/user-attachments/assets/9a3c134d-686e-41fb-ab33-c8287d9ee5e7)
![Screenshot 2025-03-27 004503](https://github.com/user-attachments/assets/98386415-00e9-451d-868c-7718e2da5cd3)
![Screenshot 2025-03-27 003905](https://github.com/user-attachments/assets/1a47c189-deeb-478a-bbcc-141fe112dc00)
![Screenshot 2025-03-27 003837](https://github.com/user-attachments/assets/4e2a9f21-1f32-4dec-88b2-3278f79907da)
![Screenshot 2025-03-27 003929](https://github.com/user-attachments/assets/11052434-078b-4f22-89d2-27b3b052ec2a)
![Screenshot 2025-03-27 003948](https://github.com/user-attachments/assets/560bdf49-6248-4787-8d34-b259bad3466e)
![Screenshot 2025-03-27 003512](https://github.com/user-attachments/assets/4f51f8db-c43a-4996-9938-cebb40a134f8)
![Screenshot 2025-03-27 003546](https://github.com/user-attachments/assets/46e833f9-be12-4b09-a4e5-305b2a9cdffa)
![Screenshot_20250327-004645-541](https://github.com/user-attachments/assets/409d2d79-3f92-4037-9aff-6b080903c0aa)
![Screenshot_20250327-004555-668](https://github.com/user-attachments/assets/3240ec97-76ca-4f86-8ea4-22f205e700d8)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
