import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/auth/sign_in/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
]);
export default router;
