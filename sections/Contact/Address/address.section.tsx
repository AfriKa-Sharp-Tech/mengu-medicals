import React from "react";

import styles from "./address.module.css";
import Link from "next/link";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import FaceBookIcon from "@/components/Icons/FaceBookIcon";
import PatientPlusIcon from "@/components/Icons/PatientPlusIcon";
import ProvidersIcon from "@/components/Icons/ProvidersIcon";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import AddressCard from "@/components/Card/AddressCard.component";
import EmergencyIcon from "@/components/Icons/EmergencyIcon";
import i18n from "@/redux/i18n";

const Address: React.FC = () => {
  const address = [
    {
      title: i18n.t("cabinetMengu"),
      location: `${i18n.t("hopitalDeLaTour")} ${i18n.t("genevaSwitzaland")} ${i18n.t("3chI2")}`,
      icon: <PhoneIcon className={styles.addressIcon} />,
      contact1: "Support@Mengumedical.com",
      contact2: "+41 22 909 0400.",
    },
    {
      title: "Emergency & Ambulance ",
      location: `${i18n.t("hopitalDeLaTour")} ${i18n.t("genevaSwitzaland")} ${i18n.t("3chI2")}`,
      icon: <EmergencyIcon className={styles.addressIcon} />,
      contact1: "+41 22 964 9400.",
      contact2: "+41 22 909 0400.",
    },
  ]
  return (
    <section id="address" className={styles.container}>
      <div className={styles.containerLeft}>
        <h6>{i18n.t("address")}</h6>
        <h5>{i18n.t("whereToReach")}</h5>
        <div className={styles.linksIcon}>
          <Link href="#">
            <LinkedInIcon className={styles.linkIcon} />
          </Link>
          <Link href="#">
            <FaceBookIcon className={styles.linkIcon} />
          </Link>
        </div>
      </div>
      <div className={styles.containerRight}>
        {address.map((add, index:number) => <AddressCard key={index} data={add} />)}
      </div>
    </section>
  );
};

export default Address;
