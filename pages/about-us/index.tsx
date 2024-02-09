import Navbar from "@/components/Navbar/navbar.component";
import Seo from "@/components/seo/Seo";
import i18n from "@/redux/i18n";
import About from "@/sections/About/AboutUS/about.section";
import Footer from "@/sections/Footer/footer.section";
import Header from "@/sections/HomeHeader/Header.section";
import { UseScrollPosition } from "@/utils/UseScrollPosition";
import React from "react";

const Services: React.FC = (): JSX.Element => {
  const position = UseScrollPosition();
  return (
    <div>
      <Seo
        title={"Mengu Medicals"}
        description={"Mengu Medicals About us page"}
        siteName={"Mengu Medicals"}
      />

      <main className="relative">
        <Navbar position={position} />
        <Header title={i18n.t("getToKnow")} />
        <About />
        <Footer />
      </main>
    </div>
  );
};

export default Services;
