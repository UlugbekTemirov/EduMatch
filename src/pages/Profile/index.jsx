import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Index = () => {
  const { language } = useSelector((state) => state.navbar);
  const token = "3n12jk12312";

  return <Navigate to={`/${language}/profile/${token}`} replace={true} />;
};

export default Index;
