import React, { useEffect } from "react";
import Header from "../compenets/Header";
import Skip from "../compenets/Skip";
import Intro from "../compenets/Intro";
import Skill from "../compenets/Skill";
import Site from "../compenets/Site";
import Port from "../compenets/Port";
import Contact from "../compenets/Contact";
import Footer from "../compenets/Footer";
import Main from "../compenets/Main";

import smooth from "../utils/smooth";
import link from "../utils/link";

const HomeView = () => {
  useEffect(() => {
    smooth();
    link();
  }, []);
  return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Skill />
            <Site />
            <Port />
            <Contact />
        </Main>
        <Footer />
    </>
  )
}

export default HomeView