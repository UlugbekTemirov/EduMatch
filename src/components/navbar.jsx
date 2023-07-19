import React, { useEffect, useRef, useState } from "react";
import Container from "../layout/container";
import { Link, useLocation } from "react-router-dom";
import Translate from "../utils/Translate";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar, setTop } from "../redux/slice/navbar.slice";
import { LanguageButton, LoginButton } from "./buttons";
import {
  TbBuilding as LcIcon,
  TbCategory as CategoryIcon,
  TbNews as NewsIcon,
  TbMenu2 as MenuIcon,
} from "react-icons/tb";
import { FaRegUserCircle as ProfileIcon } from "react-icons/fa";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import Sidebar from "./sidebar";

const HoverTracker = ({ left, width, init }) => {
  return (
    <div
      style={{
        left: `${left}px`,
        width: `${width}px`,
      }}
      className={`bg-white/[0.1] absolute duration-500  ease-in-out ${
        init && "transition-[width]"
      } -z-1 left-0 top-1/2 -translate-y-1/2 h-1/2 rounded-md`}
    />
  );
};

const BottomBar = () => {
  const { language } = useSelector((state) => state.navbar);
  const location = useLocation();

  const checkOpenLabel = (path) => {
    const route = location.pathname.split("/")[2];
    return route === path;
  };

  const routes = [
    {
      name: {
        en: "Learning Centers",
        uz: "O'quv markazlari",
        ru: "Учебные центры",
      },
      icon: LcIcon,
      route: "learning-centers",
    },
    {
      name: {
        en: "Categories",
        uz: "Yo'nalishlar",
        ru: "Категории",
      },
      icon: CategoryIcon,
      route: "categories",
    },
    {
      name: {
        en: "News",
        uz: "Yangiliklar",
        ru: "Новости",
      },
      icon: NewsIcon,
      route: "news",
    },
    {
      name: {
        en: "Profile",
        uz: "Profil",
        ru: "Профиль",
      },
      icon: ProfileIcon,
      route: "profile",
    },
  ];

  return (
    <div className="md:hidden w-full fixed left-0 bottom-0 bg-black/[0.5] backdrop-blur-sm z-10 py-1">
      <Box>
        <BottomNavigation
          showLabels
          sx={{
            backgroundColor: "transparent",
          }}
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          {routes.map(({ name, icon: Icon, route }, index) => {
            return (
              <Link key={index} to={`${language}/${route}`}>
                <BottomNavigationAction
                  sx={{
                    opacity: checkOpenLabel(route) ? 1 : 0.5,
                    transition: "all 0.3s ease-in-out",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                  label={
                    <div className="h-full">
                      <h1 className="text-xs leading-[1]">
                        <Translate dictionary={name} />
                      </h1>
                    </div>
                  }
                  showLabel={true}
                  icon={<Icon size={25} />}
                />
              </Link>
            );
          })}
        </BottomNavigation>
      </Box>
    </div>
  );
};

const Navbar = () => {
  const { language, top, sidebar } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  const routes = [
    {
      name: {
        en: "Learning Centers",
        uz: "O'quv markazlari",
        ru: "Учебные центры",
      },
      route: "learning-centers",
    },
    {
      name: {
        en: "Categories",
        uz: "Yo'nalishlar",
        ru: "Категории",
      },
      route: "categories",
    },
    {
      name: {
        en: "About us",
        uz: "Biz haqimizda",
        ru: "О нас",
      },
      route: "about",
    },
  ];

  const configInit = {
    left: 0,
    width: 0,
    check: true,
    init: true,
  };
  const [config, setConfig] = useState(configInit);

  const navLink = useRef(null);
  const navLinkContainer = useRef(null);

  const calcPositionHandler = (e) => {
    const { offsetLeft, offsetWidth } = e.target;

    if (config.left === offsetLeft - 10 && config.width === offsetWidth + 20)
      return;

    console.log(offsetLeft, offsetWidth);
    setConfig((prev) => ({
      ...prev,
      left: offsetLeft - 10,
      width: offsetWidth + 20,
    }));
    setTimeout(() => {
      setConfig((prev) => ({ ...prev, init: false }));
    }, 20);
  };

  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;
    const links = ["learning-centers", "categories", "about"];
    const activeLink = pathname.split("/")[2];
    if (links.includes(activeLink)) {
      setTimeout(() => {
        setConfig((prev) => ({ ...prev, init: false }));
      }, 20);
      const links = navLinkContainer.current.children;
      for (let i = 0; i < links.length; i++) {
        const pathname = links[i].pathname.split("/")[2];
        if (pathname === activeLink) {
          console.log(pathname, activeLink);
          const { offsetLeft, offsetWidth } = links[i];
          setConfig((prev) => ({
            ...prev,
            left: offsetLeft - 10,
            width: offsetWidth + 20,
          }));
          break;
        }
      }
    } else {
      setConfig((prev) => ({ ...prev, width: 0 }));
    }
  }, [location, config.check]);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setTop(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  const toggleSidebar = () => {
    dispatch(setSidebar(!sidebar));
  };

  if (location.pathname.split("/")[2].toLowerCase() === "auth") return null;

  return (
    <>
      <Sidebar />
      <BottomBar />
      <div
        className={`fixed top-0 left-0 w-full z-10 h-[80px] flex items-center duration-500 ${
          top > 20 ? "bg-black/[0.5] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <Container className="flex items-center justify-between h-full">
          <Link
            to={`${language}`}
            className="font-bold text-2xl tracking-wider"
          >
            Logo
          </Link>
          <div className="md:hidden flex items-center gap-2">
            <LanguageButton />
            <MenuIcon
              id="menu-icon"
              onClick={toggleSidebar}
              size={30}
              color="white"
            />
          </div>
          <div className="relative h-full px-2 md:flex items-center hidden">
            <HoverTracker {...config} />
            <div className="flex items-center gap-7" ref={navLinkContainer}>
              {routes.map(({ route, name }, index) => {
                return (
                  <Link
                    ref={navLink}
                    onMouseMove={calcPositionHandler}
                    onMouseOut={() =>
                      setConfig((prev) => ({
                        ...prev,
                        check: !config.check,
                      }))
                    }
                    className={`font-primary relative z-1 py-2 text-lg`}
                    key={index}
                    to={`${language}/${route}`}
                  >
                    <Translate dictionary={name} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="h-full md:flex items-center gap-2 hidden">
            <LanguageButton />
            <LoginButton />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
