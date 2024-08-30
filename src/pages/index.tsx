import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Title from "@/components/title";
import Main from "@/components/main";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <Title />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
