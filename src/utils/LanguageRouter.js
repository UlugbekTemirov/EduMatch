import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { setLanguage } from "../redux/slice/navbar.slice";
import { useDispatch, useSelector } from "react-redux";

const LanguageRouter = ({ children, route }) => {
  const { lang } = useParams();
  const { language } = useSelector((state) => state.navbar);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const languages = ["uz", "ru", "en"];

  useEffect(() => {
    if (!languages.includes(lang)) {
      navigate(`/uz/${route.path}`, { replace: true });
      return;
    }

    if (language === lang) return;
    dispatch(setLanguage(lang));

    //eslint-disable-next-line
  }, [lang]);

  return <div>{children}</div>;
};

export default LanguageRouter;
