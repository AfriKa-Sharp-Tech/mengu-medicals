import Navbar from "@/components/Navbar/navbar.component";
import Seo from "@/components/seo/Seo";
import Advertisment from "@/sections/FAQ/Advertisment/advertisment.section";
import Faqs from "@/sections/FAQ/FAQs/faqs.section";
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
        description={"Mengu Medicals FAQ page"}
        siteName={"Mengu Medicals"}
      />

      <main className="relative">
        <Navbar position={position} />
        <Header title="Any Other Question?" />
        <Faqs />
        <Advertisment />
        <Footer />
      </main>
    </div>
  );
};

export default Services;
