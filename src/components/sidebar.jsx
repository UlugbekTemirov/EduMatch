import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { setSidebar } from "../redux/slice/navbar.slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Translate from "../utils/Translate";
import { LoginButton } from "./buttons";

const Sidebar = () => {
  const { sidebar, language } = useSelector((state) => state.navbar);
  const sidebarRef = useRef(null);
  const dispatch = useDispatch();

  const handleOutsideClick = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      event.target.id !== "menu-icon"
    ) {
      dispatch(setSidebar(false));
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  const sidebarRoutes = [
    {
      name: {
        en: "Home",
        uz: "Bosh sahifa",
        ru: "Главная",
      },
      route: "/",
    },
    {
      name: {
        en: "About",
        uz: "Biz haqimizda",
        ru: "О нас",
      },
      route: "about",
    },
  ];

  return (
    <div
      ref={sidebarRef}
      className={`fixed px-4 py-5 ${
        sidebar ? "left-0" : "-left-full"
      } top-0 w-[80%] bg-black/[0.8] backdrop-blur-sm duration-300 h-screen  text-white z-20`}
    >
      <div>
        <h1 className="font-semibold text-2xl uppercase">Logo</h1>
      </div>
      <div className="flex flex-col gap-[200px]">
        <div className="flex flex-col">
          {sidebarRoutes.map(({ name, route }, index) => {
            return (
              <Link
                onClick={() => dispatch(setSidebar(false))}
                key={index}
                to={`${language}/${route}`}
              >
                <Translate dictionary={name} />
              </Link>
            );
          })}
        </div>
        <div>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
