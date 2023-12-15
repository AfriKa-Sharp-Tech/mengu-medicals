import Navbar from "@/components/Navbar/navbar.component";
import Seo from "@/components/seo/Seo";
import Footer from "@/sections/Footer/footer.section";
import Header from "@/sections/HomeHeader/Header.section";
import Shared from "@/sections/Shared/Shared.section";
import React from "react";

const Services: React.FC = (): JSX.Element => {
  return (
    <div>
      <Seo
        title={"Mengu Medicals"}
        description={"Mengu Medicals Service page"}
        siteName={"Mengu Medicals"}
      />

      <main className="relative">
        <Navbar />
        <Header title="Explore Our Services" />
        <Shared flip /> 
        <Footer />
      </main>
    </div>
  );
};

export default Services;
