import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AOS from "aos";

// components
import Loader from "./components/loader";
import NotFound from "./components/not-found";

// layouts
import Main from "./layout/main";

// utils
import LanguageRouter from "./utils/LanguageRouter";

// pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const LearningCenters = lazy(() => import("./pages/LearningCenters"));
const Categories = lazy(() => import("./pages/Categories"));
const Auth = lazy(() => import("./pages/Auth"));
const Profile = lazy(() => import("./pages/Profile"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const News = lazy(() => import("./pages/News"));

function App() {
  const routes = [
    {
      path: "",
      element: Home,
    },
    {
      path: "about",
      element: About,
    },
    {
      path: "learning-centers",
      element: LearningCenters,
    },
    {
      path: "categories",
      element: Categories,
    },
    {
      path: "auth",
      element: Auth,
    },
    {
      path: "profile",
      element: Profile,
    },
    {
      path: "profile/:id",
      element: UserProfile,
    },
    {
      path: "news",
      element: News,
    },
  ];
  AOS.init();

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Main>
          <Routes>
            {/* Redirect to /uz */}
            {routes.map((route, index) => (
              <Route
                key={index}
                path={`/${route.path}`}
                element={<Navigate to={`/uz/${route.path}`} replace />}
              />
            ))}

            {/* Main routes */}
            {routes.map((route, index) => (
              <Route
                key={index}
                path={`/:lang/${route.path}`}
                element={
                  <LanguageRouter route={route}>
                    <route.element />
                  </LanguageRouter>
                }
              />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </Suspense>
    </Router>
  );
}

export default App;
