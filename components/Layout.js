import { useEffect, useState } from "react";
import Nav from "./navigationbar/Nav";
import { useRouter } from "next/router";
import MainLoading from "./Loading.js/MainLoading";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Nav />

      {children}
    </>
  );
};

export default Layout;
