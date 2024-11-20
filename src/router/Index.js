import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../layout/Layout"));
const Loading = lazy(() => import("../component/Loading"));

const Login = lazy(() => import("../page/login/Login"));
const LoginType = lazy(() => import("../page/login/components/LoginType"));
const Signup = lazy(() => import("../page/signup/Signup"));
const Profile = lazy(() => import("../page/profile"));
const Main = lazy(() => import("../page/main"));
const Introduction = lazy(() => import("../page/introduction"));
const Event = lazy(() => import("../page/showevent"));
const List = lazy(() => import("../page/project/list"));
const Upload = lazy(() => import("../page/project/upload"));
const Detail = lazy(() => import("../page/project/detail"));
const Boost = lazy(() => import("../page/project/boost"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "login/:type",
        element: (
          <Suspense fallback={<Loading />}>
            <LoginType />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Loading />}>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "introduction",
        element: (
          <Suspense fallback={<Loading />}>
            <Introduction />
          </Suspense>
        ),
      },
      {
        path: "list",
        element: (
          <Suspense fallback={<Loading />}>
            <List />
          </Suspense>
        ),
      },
      {
        path: "detail",
        element: (
          <Suspense fallback={<Loading />}>
            <Detail />
          </Suspense>
        ),
        children: [
          {
            path: "boost",
            element: (
              <Suspense fallback={<Loading />}>
                <Boost />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "upload",
        element: (
          <Suspense fallback={<Loading />}>
            <Upload />
          </Suspense>
        ),
      },
      {
        path: "event",
        element: (
          <Suspense fallback={<Loading />}>
            <Event />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
