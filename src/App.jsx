import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LanguageSelector from "./components/language-selector";
import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Registration";
import BusinessRegistrationForm from "./components/BusinessRegistration";
import EventsForm from "./components/EventsRegistration";
import Navbar from "./components/Navbar";
import MainHomePage from "./components/MainHome";
import ProductDetail from "./components/ProductDetail";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("about.title")}</h1>
      <Login />
    </>
  );
};

const App = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <Navbar />
      <div className="container">
        {/* Navigation */}

        {/* Page content */}
        <Routes>
          <Route path="/" element={<Home home={t("home")} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register-user" element={<Register />} />
          <Route
            path="/register-business"
            element={<BusinessRegistrationForm />}
          />
          <Route path="/register-event" element={<EventsForm />} />
          <Route path="/main" element={<MainHomePage />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
