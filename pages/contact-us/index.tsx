import Navbar from "@/components/Navbar/navbar.component";
import Seo from "@/components/seo/Seo";
import Address from "@/sections/Contact/Address/address.section";
import ContactUs from "@/sections/Contact/ContactUs/contact.section";
import MapSection from "@/sections/Contact/Map/Map.section";
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
        description={"Mengu Medicals Contact us page"}
        siteName={"Mengu Medicals"}
      />

      <main className="relative">
        <Navbar position={position} />
        <Header
          title="Contact Us"
          subtitle="Lörem ipsum slöjböter spefåvis inte proll stuprörspolitik, oaktat kontrasat nonade."
        />
        <ContactUs />
        <Address />
        <MapSection />
        <Footer />
      </main>
    </div>
  );
};

export default Services;
