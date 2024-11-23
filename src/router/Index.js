import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../layout/Layout"));
const Loading = lazy(() => import("../component/Loading"));

const Login = lazy(() => import("../page/login/Login"));
const KakaoLoading = lazy(() =>
  import("../page/login/components/KakaoLoading")
);
const LoginType = lazy(() => import("../page/login/components/LoginType"));
const Signup = lazy(() => import("../page/signup/Signup"));
const SignupCompany = lazy(() =>
  import("../page/signup/components/SignupCompany")
);
const MyPage = lazy(() => import("../page/myPage/MyPage"));
const MyPageEdit = lazy(() => import("../page/myPage/MyPageEdit"));
const Profile = lazy(() => import("../page/profile/Profile"));
const Main = lazy(() => import("../page/main"));
const Introduction = lazy(() => import("../page/introduction/Introduction"));
const Event = lazy(() => import("../page/showevent/Event"));
const List = lazy(() => import("../page/project/list"));
const Search = lazy(() => import("../page/project/list/SearchList"));
const CategoryList = lazy(() =>
  import("../page/main/components/category/CategoryList")
);
const Upload = lazy(() => import("../page/project/upload"));
const Detail = lazy(() => import("../page/project/detail"));
const Boost = lazy(() => import("../page/project/boost"));

const Write = lazy(() => import("../page/project/upload/PjWrite"));
const Fund = lazy(() => import("../page/project/upload/Pjfund"));
const Plan = lazy(() => import("../page/project/upload/PjPlan"));
const PjUser = lazy(() => import("../page/project/upload/PjUser"));
const ShowProject = lazy(() => import("../page/project/upload/PjUpload"));
const No = lazy(() => import("../page/project/upload/NoUp"));

const Ranking = lazy(() => import("../page/ranking/Ranking"));


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
        path: "nologin",
        element: (
          <Suspense fallback={<Loading />}>
            <No />
          </Suspense>
        ),
      },
      {
        path: "api/auth/kakao/login",
        element: (
          <Suspense fallback={<Loading />}>
            <KakaoLoading />
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
        path: "signup/company",
        element: (
          <Suspense fallback={<Loading />}>
            <SignupCompany />
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
        path: "myPage",
        element: (
          <Suspense fallback={<Loading />}>
            <MyPage />
          </Suspense>
        ),
      },
      {
        path: "myPage/edit",
        element: (
          <Suspense fallback={<Loading />}>
            <MyPageEdit />
          </Suspense>
        ),
      },
      {
        path: "profile/:id",
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
        path: "search",
        element: (
          <Suspense fallback={<Loading />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "write",
        element: (
          <Suspense fallback={<Loading />}>
            <Write />
          </Suspense>
        ),
      },
      {
        path: "fund",
        element: (
          <Suspense fallback={<Loading />}>
            <Fund />
          </Suspense>
        ),
      },
      {
        path: "createuser",
        element: (
          <Suspense fallback={<Loading />}>
            <PjUser />
          </Suspense>
        ),
      },
      {
        path: "showproject",
        element: (
          <Suspense fallback={<Loading />}>
            <ShowProject />
          </Suspense>
        ),
      },
      {
        path: "plan",
        element: (
          <Suspense fallback={<Loading />}>
            <Plan />
          </Suspense>
        ),
      },
      {
        path: "category",
        element: (
          <Suspense fallback={<Loading />}>
            <CategoryList />
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
      },
      {
        path: "/boost",
        element: (
          <Suspense fallback={<Loading />}>
            <Boost />
          </Suspense>
        ),
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
      {
        path: "ranking",
        element: (
            <Suspense fallback={<Loading />}>
              <Ranking />
            </Suspense>
        ),
      },
    ],
  },
]);

export default router;
