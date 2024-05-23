import ProtectedRoute from "@/presentation/Router/ProtectedRoute";
import VerifyPage from "@/presentation/pages/Auth/Verify/VerifyPage";
import { HomePage } from "@/presentation/pages/Home/HomePage";
import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/Auth/SignIn/SignInPage";
import ErrorPage from "../pages/Error/ErrorPage";

export const router = createBrowserRouter([
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
