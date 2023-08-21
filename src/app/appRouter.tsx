import { Navigate, createBrowserRouter, useLocation } from "react-router-dom";
import { baseLayout } from "./layouts/baseLayout";
import { useAuth } from "entities/session";
import { FC, ReactElement } from "react";
import { Loadable } from "shared/ui";
import { lazy } from "react";

const Dashboard = Loadable(lazy(() => import("pages/dashboard")));
const Settings = Loadable(lazy(() => import("pages/settings")));
const Calendar = Loadable(lazy(() => import("pages/calendar")));
const Profile = Loadable(lazy(() => import("pages/profile")));
const CardsPage = Loadable(lazy(() => import("pages/cards")));
const AuthPage = Loadable(lazy(() => import("pages/auth")));
const EditPage = Loadable(lazy(() => import("pages/edit")));

type GuardGuestProps = {
  children: ReactElement;
};

const GuardGuest: FC<GuardGuestProps> = ({ children }) => {
  const { isAuthorized } = useAuth();
  const location = useLocation();

  if (!isAuthorized) return <Navigate to="/login" state={{ from: location }} />;
  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: baseLayout,
    errorElement: <>404</>,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "login",
        element: <AuthPage />,
      },
      {
        path: "cards",
        element: (
          <GuardGuest>
            <CardsPage />
          </GuardGuest>
        ),
      },
      {
        path: "profile",
        element: (
          <GuardGuest>
            <Profile />
          </GuardGuest>
        ),
      },
      {
        path: "edit",
        element: (
          <GuardGuest>
            <EditPage />
          </GuardGuest>
        ),
      },
      {
        path: "calendar",
        element: (
          <GuardGuest>
            <Calendar />
          </GuardGuest>
        ),
      },
      {
        path: "settings",
        element: (
          <GuardGuest>
            <Settings />
          </GuardGuest>
        ),
      },
    ],
  },
]);
