import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Sidebar from "../components/layout/sidebar/Sidebar";
import { AuthContext } from "../context/AuthContext";
import FriendPage from "../pages/FriendPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";

function Router() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<AuthLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="friend" element={<Sidebar />}>
              <Route path="" element={<FriendPage />} />
              <Route path="request" element={<FriendPage />} />
              <Route path="suggestion" element={<FriendPage />} />
            </Route>

            <Route path="profile/:id" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />}></Route>
        </>
      )}
    </Routes>
  );
}

export default Router;
