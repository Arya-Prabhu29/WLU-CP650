import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "Français" },
  { code: "hi", lang: "हिन्दी" },
  { code: "ar", lang: "اَلْعَرَبِيَّةُ" },
  { code: "cmn", lang: "中文" },
  { code: "tr", lang: "Türkçe" },
];

const Home = ({ home }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <h1>{home.title}</h1>
      <h3>{home.subtitle}</h3>
      <div className="languages-grid">
        {" "}
        {/* Add this parent container */}
        {languages.map((language) => (
          <div
            className="homepage-language-item"
            onClick={() => changeLanguage(language.code)}
            key={language.code}
          >
            <span>
              <img src={`/images/${language.code}.png`} alt={language.lang} />
              <p>{language.lang}</p>
            </span>
          </div>
        ))}
        <button>{home.btnMessage} &#8594;</button>
      </div>
    </>
  );
};

export default Home;
