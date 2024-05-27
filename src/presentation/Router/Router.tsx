import SignInPage from "@/presentation/pages/Auth/SignIn/SignInPage";
import ErrorPage from "@/presentation/pages/Error/ErrorPage";
import HomePage from "@/presentation/pages/Home/HomePage";
import ProtectedRoute from "@/presentation/router/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "@/presentation/pages/Dashboard/DashboardPage";
import HubsPage from "@/presentation/pages/Hubs/HubsPage";
import SpacesPage from "@/presentation/pages/Spaces/SpacesPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/signIn",
    element: <SignInPage />,
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/hubs",
        element: <HubsPage />,
      },
      {
        path: "/spaces",
        element: <SpacesPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default router;
