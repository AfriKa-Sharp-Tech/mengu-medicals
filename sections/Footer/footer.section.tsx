import React from "react";

import styles from "./footer.module.css";
import { NavLink } from "@/components/Navbar/navbar.component";
import Link from "next/link";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import FaceBookIcon from "@/components/Icons/FaceBookIcon";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import { useRouter } from "next/router";
import MenguIcon2 from "@/components/Icons/MenguIcon2";
import i18n from "@/redux/i18n";

const Footer: React.FC = () => {
  const router = useRouter();
  const navLinks: NavLink[] = [
    { value: "/", label: i18n.t('home') },
    { value: "/about-us", label: i18n.t('aboutUs') },
    { value: "/services", label: i18n.t('services') },
    { value: "/contact-us", label: i18n.t('contactUs') },
  ];

  const navLinks1: NavLink[] = [
    { value: "/faq", label: i18n.t('faq') },
    { value: "#", label: i18n.t('pathologies') },
    { value: "#features", label: i18n.t('mentoring') },
    { value: "#how-it-works", label: i18n.t('privacyPolicy') },
  ];
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.curve} />
      <div className={styles.footerContents}>
        <div className={styles.footerContent}>
          <div className={styles.mengu}>
            <MenguIcon2 className={styles.menguIcon} />
          </div>
          <div className={`${styles.socials} !flex md:!hidden`}>
            <button>
              <LinkedInIcon className={styles.socialIcon} />
            </button>
            <button>
              <FaceBookIcon className={styles.socialIcon} />
            </button>
          </div>
        </div>
        <div className={styles.footerContent1}>
          <h6>{i18n.t('quickLinks')}</h6>
          {navLinks.reverse().map((navlink: NavLink, index: number) => (
            <Link
              key={index + navlink.value}
              href={navlink.value}
              className={styles.footerLink}
            >
              {navlink.label}
            </Link>
          ))}
        </div>
        <div className={styles.footerContent1}>
          <h6>{i18n.t('explore')}</h6>
          {navLinks1.reverse().map((navlink: NavLink, index: number) => (
            <Link
              key={index + navlink.value}
              href={navlink.value}
              className={styles.footerLink}
            >
              {navlink.label}
            </Link>
          ))}
        </div>
        <div className={`${styles.footerContent1} !hidden md:!flex`}>
          <h6>{i18n.t('socialLinks')}</h6>
          <div className={styles.socials}>
            <button>
              <LinkedInIcon className={styles.socialIcon} />
            </button>
            <button>
              <FaceBookIcon className={styles.socialIcon} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.footerFoot}>
        <p>
          &copy;{new Date().getFullYear()} {i18n.t('allRightsReserved')}
        </p>
        <div className={styles.footerButton} onClick={() =>router.push("#header")}>
          <ChevronIcon className={styles.topIcon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
