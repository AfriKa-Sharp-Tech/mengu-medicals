import React from "react";

import styles from "./services.module.css";
import ServiceCard from "@/components/Card/ServiceCard.component";
import ProfessionalIcon from "@/components/Icons/ProfessionalIcon";
import PharmaIcon from "@/components/Icons/PharmaIcon";
import ProvidersIcon from "@/components/Icons/ProvidersIcon";
import PatientPlusIcon from "@/components/Icons/PatientPlusIcon";
import Link from "next/link";
import Button, { ButtonType } from "@/components/Button/Button.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import { useRouter } from "next/router";
import i18n from "@/redux/i18n";

const Services: React.FC = () => {
  const router = useRouter();
  const services = [
    {
      title: i18n.t('childWithA'),
      description:i18n.t('theDevastatingNews'),
      icon: <PatientPlusIcon className={styles.userIcon} />,
    },
    {
      title: i18n.t('childWithApp'),
      description:i18n.t('aSuddenSearing'),
      icon: <ProvidersIcon className={styles.userIcon} />,
    },
    {
      title: i18n.t('teenagerWith'),
      description:i18n.t('duringACrucialSoccer'),
      icon: <ProfessionalIcon className={styles.userIcon} />,
    },
    {
      title: i18n.t('newbornCongenital'),
      description:i18n.t('aTinyBaby'),
      icon: <PharmaIcon className={styles.userIcon} />,
    },
  ];
  return (
    <section id="services" className={styles.container}>
      <div className={styles.containerTop}>
        <h6>{i18n.t('whatWeDoBest')}</h6>
        <h4>{i18n.t('whoWeServe')}</h4>
      </div>
      <div className={styles.containerBottom}>
        {services.map((service, index: number) => (
          <ServiceCard data={service} key={index} />
        ))}
      </div>
      <div className={styles.footer}>
        <p>
        {i18n.t('dontSeeThe')} <Link href="/contact-us">{i18n.t('contactUs')}!</Link>
        </p>
        <div className={styles.footerButton}>
          <Button
            text={i18n.t('viewAllPathologies')}
            type={ButtonType.SEC}
            icon={<ChevronIcon className={styles.buttonIcon} />}
            onClick={() => router.push("/services")}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
