import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home";
import { ServicesPage } from "./pages/Services";
import { PackagesPage } from "./pages/Packages";
import { SampleWorkPage } from "./pages/SampleWork";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { PrivacyPage } from "./pages/Privacy";
import { CookiePage } from "./pages/Cookie";
import { TermsPage } from "./pages/Terms";
import { NotFoundPage } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "packages", Component: PackagesPage },
      { path: "sample-work", Component: SampleWorkPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "privacy-policy", Component: PrivacyPage },
      { path: "cookie-policy", Component: CookiePage },
      { path: "terms", Component: TermsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
