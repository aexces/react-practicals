import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = "user";
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) return navigate("/signIn", { replace: true });
  }, [navigate, user]);

  return children;
}
