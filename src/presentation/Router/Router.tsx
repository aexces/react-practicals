import VerifyPage from "@/presentation/Pages/Auth/Verify/VerifyPage";
import ProtectedRoute from "@/presentation/Router/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../Pages/Auth/SignIn/SignInPage";
import ErrorPage from "../Pages/Error/ErrorPage";

import HomePage from "@/presentation/Pages/Home/HomePage";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/signIn",
    element: <SignInPage />,
  },
  {
    path: "/verify",
    element: <VerifyPage />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),

    errorElement: <ErrorPage />,
  },
]);
