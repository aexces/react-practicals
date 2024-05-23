import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = "user";
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signIn");
    }
  }, [navigate, user]);

  return children;
}
