import React, { useEffect } from "react";
import { FaLine } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
// import hero from '/public/Hero.mp4'
import Head from "next/head";

import HeroSection from "../components/HeroSection";
import AboutPage from "../components/AboutPage";
import Project from "../components/Project";
import ContactUs from "../components/ContactUs";
import MobileResponsive from "../components/MobileResponsive";

function Index() {
  // final build

  return (
    <>
      <div className="w-screen hidden  h-screen sm:snap-y snap-mandatory  sm:block  overflow-y-scroll overflow-x-hidden  scroll-smooth  ">
        <Head>
          <title>Akibrot Samuel || Portofolio </title>
        </Head>
        <section></section>
        <main >
          <HeroSection />
          <AboutPage />
          <Project />
          <ContactUs />
        </main>
      </div>
      <div className="sm:hidden">
        <MobileResponsive />

      </div>
    </>
  );
}

export default Index;
