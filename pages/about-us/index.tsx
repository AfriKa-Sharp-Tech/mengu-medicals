import Navbar from "@/components/Navbar/navbar.component";
import Seo from "@/components/seo/Seo";
import Footer from "@/sections/Footer/footer.section";
import Header from "@/sections/HomeHeader/Header.section";
import React from "react";

const Services: React.FC = (): JSX.Element => {
  return (
    <div>
      <Seo
        title={"Mengu Medicals"}
        description={"Mengu Medicals About us page"}
        siteName={"Mengu Medicals"}
      />

      <main className="relative">
        <Navbar />
        <Header title="Get to Know More About Us" />
        <Footer />
      </main>
    </div>
  );
};

export default Services;
