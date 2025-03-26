# To-Do App Project Overview
* Live Link :- https://todoquadbtechmanash.netlify.app

* Technologies Used
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


* Key Features & Logic - 

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




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
