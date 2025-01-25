import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home.tsx";
import Experience from "./components/Experience.tsx";
import FloatingBackground from "./components/FloatingBG.tsx";
import Error from "./components/Error.tsx";
import Header from "./components/Header.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      
        <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FloatingBackground>
      <RouterProvider router={appRouter} />
    </FloatingBackground>
  </StrictMode>
);
