import Navbar from "@/components/Navbar/navbar.component";
import Seo from "@/components/seo/Seo";
import Footer from "@/sections/Footer/footer.section";
import Header from "@/sections/HomeHeader/Header.section";
import Service1 from "@/sections/ServicesSection/Services/service1.section";
import Service2 from "@/sections/ServicesSection/Services/service2.section";
import Service3 from "@/sections/ServicesSection/Services/service3.section";
import Service4 from "@/sections/ServicesSection/Services/service4.section";
import Shared from "@/sections/Shared/Shared.section";
import { UseScrollPosition } from "@/utils/UseScrollPosition";
import React from "react";

const Services: React.FC = (): JSX.Element => {
  const position = UseScrollPosition();
  return (
    <div>
      <Seo
        title={"Mengu Medicals"}
        description={"Mengu Medicals Service page"}
        siteName={"Mengu Medicals"}
      />

      <main className="relative">
        <Navbar position={position} />
        <Header title="Explore Our Services" />
        <Shared flip /> 
        <Service1 />
        <Service2 />
        <Service3 />
        <Service4 />
        <Footer />
      </main>
    </div>
  );
};

export default Services;
