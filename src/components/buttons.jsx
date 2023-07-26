import { useEffect, useRef, useState } from "react";
import { Button as MButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import uzb_flag from "../assets/images/uzb-flag.jpg";
import eng_flag from "../assets/images/england-flag.png";
import rus_flag from "../assets/images/russian-flag.png";
import { MdLanguage as LangIcon } from "react-icons/md";
import { BiLogInCircle as LoginIcon } from "react-icons/bi";

// utils
import Translate from "../utils/Translate";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setLanguage } from "../redux/slice/navbar.slice";

export const Button = (props) => {
  const { children } = props;
  return (
    <MButton
      sx={{
        borderColor: "rgba(255,255,255,0.5)",
        borderRadius: "0.5rem",
        backdropFilter: "blur(5px)",
        "&:hover": {
          borderColor: "white",
        },
        "&:active": {
          backgroundColor: "rgba(255,255,255,0.1)",
        },
      }}
      variant="outlined"
      {...props}
    >
      {children}
    </MButton>
  );
};

export const LanguageButton = ({ sx, iconSize = 18 }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { language } = useSelector((state) => state.navbar);

  const languages = [
    {
      name: {
        en: "Eng",
        uz: "Ing",
        ru: "Анг",
      },
      value: "en",
      image: eng_flag,
    },
    {
      name: {
        en: "Uzb",
        uz: "O'zb",
        ru: "Узб",
      },
      value: "uz",
      image: uzb_flag,
    },
    {
      name: {
        en: "Rus",
        uz: "Rus",
        ru: "Рус",
      },
      value: "ru",
      image: rus_flag,
    },
  ];

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const [dispatch, location, navigate] = [
    useDispatch(),
    useLocation(),
    useNavigate(),
  ];

  useEffect(() => {
    const path = location.pathname.slice(4);
    const { search } = location;
    navigate(`/${language}/${path}${search}`, { replace: true });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <div ref={dropdownRef} className="relative">
      <Button className="flex gap-2" onClick={() => setOpen(!open)}>
        <LangIcon size={iconSize} color="white" />{" "}
        <h1 className="text-white">{language}</h1>
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[45px] right-0 flex flex-col gap-2 w-[120px] z-10"
          >
            {languages.map((lang, index) => (
              <div
                onClick={() => {
                  dispatch(setLanguage(lang.value));
                  setOpen(false);
                }}
                className="relative h-[40px] flex items-center justify-center overflow-hidden duration-300 hover:scale-105 cursor-pointer rounded-xl"
                key={index}
              >
                <div className="bg-black/[0.6] absolute left-0 top-0 w-full h-full flex z-10"></div>
                <img
                  className="absolute left-0 right-0 w-full h-full object-fill -z-10 blur-[1px]"
                  src={lang.image}
                  alt={lang.name.en}
                />
                <h1 className="relative z-1 z-10 text-xl">
                  <Translate dictionary={lang.name} />
                </h1>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const LoginButton = () => {
  const { language } = useSelector((state) => state.navbar);

  return (
    <Link to={`${language}/auth`}>
      <Button className="flex gap-2">
        <LoginIcon size={18} color="white" />
        <h1 className="text-white">Login</h1>
      </Button>
    </Link>
  );
};
