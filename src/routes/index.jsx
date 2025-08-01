import AdminTemplate from "../pages/AdminTemplate";
import HomeTemplate from "../pages/HomeTemplate";
import HomePage from "../pages/HomeTemplate/HomePage";
import AboutPage from "../pages/HomeTemplate/AboutPage";
import ListMoviePage from "../pages/HomeTemplate/ListMoviePage";
import Dashboard from "../pages/AdminTemplate/Dashboard";
import AddUserPage from "../pages/AdminTemplate/AddUserPage";
import NewsPage from "../pages/HomeTemplate/NewsPage";
import LoginPage from "../pages/HomeTemplate/LoginPage";
import RegisterPage from "../pages/HomeTemplate/RegisterPage";
import AuthenPage from "../pages/AdminTemplate/AuthenPage";
import { Route } from "react-router-dom";
import MovieDetailPage from "../pages/HomeTemplate/MovieDetailPage";
import MovieManagement from "../pages/AdminTemplate/MovieManagement";
import AddMovie from "../pages/AdminTemplate/AddMovie";

const routes = [
  {
    path: "",
    element: HomeTemplate,
    nested: [
      {
        path: "",
        element: HomePage,
      },
      {
        path: "about",
        element: AboutPage,
      },
      {
        path: "list-movie",
        element: ListMoviePage,
      },
      {
        path: "news",
        element: NewsPage,
      },
      {
        path: "login",
        element: LoginPage,
      },
      {
        path: "register",
        element: RegisterPage,
      },
      {
        path: "movie-detail/:movieId",
        element: MovieDetailPage,
      },
    ],
  },
  {
    path: "admin",
    element: AdminTemplate,
    nested: [
      {
        path: "dashboard",
        element: Dashboard,
      },
      {
        path: "movies-management",
        element: MovieManagement,
      },
      {
        path: "add-user",
        element: AddUserPage,
      },
      {
        path: "add-user",
        element: AddUserPage,
      },
      {
        path: "add-user",
        element: AddUserPage,
      },
      {
        path: "movies-management/add-movie",
        element: AddMovie,
      }
    ],
  },
  {
    path: "authen",
    element: AuthenPage,
  },
];

export const genarateRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};
