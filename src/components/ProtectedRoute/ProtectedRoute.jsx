import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, isAuthChecked, children }) {
  if (!isAuthChecked) {
    return null;
  }

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/"
        replace
        state={{ openLoginModal: true }}
      />
    );
  }

  return children;
}

export default ProtectedRoute;