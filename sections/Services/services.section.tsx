import React from "react";

import styles from "./services.module.css";
import UserIcon from "@/components/Icons/UserIcon";
import ServiceCard from "@/components/Card/ServiceCard.component";
import ProfessionalIcon from "@/components/Icons/ProfessionalIcon";
import PharmaIcon from "@/components/Icons/PharmaIcon";
import ProvidersIcon from "@/components/Icons/ProvidersIcon";
import PatientPlusIcon from "@/components/Icons/PatientPlusIcon";
import Link from "next/link";
import Button, { ButtonType } from "@/components/Button/Button.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";

const Services: React.FC = () => {
  const services = [
    {
      title: "Patients",
      description:
        "At Asklepios, we empower patients with personalized healthcare solutions, helping them make informed choices.",
      icon: <PatientPlusIcon className={styles.userIcon} />,
    },
    {
      title: "Providers",
      description:
        "At Asklepios, we empower patients with personalized healthcare solutions, helping them make informed choices.",
      icon: <ProvidersIcon className={styles.userIcon} />,
    },
    {
      title: "Professionals",
      description:
        "At Asklepios, we empower patients with personalized healthcare solutions, helping them make informed choices.",
      icon: <ProfessionalIcon className={styles.userIcon} />,
    },
    {
      title: "Pharma",
      description:
        "At Asklepios, we empower patients with personalized healthcare solutions, helping them make informed choices.",
      icon: <PharmaIcon className={styles.userIcon} />,
    },
  ];
  return (
    <section id="services" className={styles.container}>
      <div className={styles.containerTop}>
        <h6>What we do best</h6>
        <h4>Who We Serve</h4>
      </div>
      <div className={styles.containerBottom}>
        {services.map((service, index: number) => (
          <ServiceCard data={service} key={index} />
        ))}
      </div>
      <div className={styles.footer}>
        <p>
          {" "}
          Don’t see the above category? <Link href="">Contact Us!</Link>
        </p>
        <Button
          text="View All Pathologies"
          type={ButtonType.SEC}
          icon={<ChevronIcon className={styles.buttonIcon} />}
        />
      </div>
    </section>
  );
};

export default Services;
