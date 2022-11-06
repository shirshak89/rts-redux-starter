import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectStore } from "../store";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const { user: userProp } = useSelector(selectStore);
  const { user } = userProp;

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
