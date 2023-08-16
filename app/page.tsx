import React from "react";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import Account from "@/components/account";
import Review from "@/components/review";
import CallToAction from "@/components/call-to-action";

const Home = () => {
  return (
    <main>
      <Hero />
      <Feature />
      <Account />
      <CallToAction />
      <Review />
    </main>
  );
};

export default Home;
