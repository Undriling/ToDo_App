import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import Header from "./components/header.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/about.jsx";
import Profile from "./components/profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLEOAuth_CLIENT_ID}>
        <Header />
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>
);
