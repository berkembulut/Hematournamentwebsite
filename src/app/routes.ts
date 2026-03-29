import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import RulesPage from "./pages/RulesPage";
import JourneyPage from "./pages/JourneyPage";
import SchedulePage from "./pages/SchedulePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "rules/:category?", Component: RulesPage },
      { path: "journey/:section?", Component: JourneyPage },
      { path: "schedule/:section?", Component: SchedulePage },
      { path: "about/:section?", Component: AboutPage },
      { path: "*", Component: NotFound },
    ],
  },
]);