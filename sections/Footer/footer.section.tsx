import React from "react";

import styles from "./footer.module.css";
import MenguIcon from "@/components/Icons/MenguIcon";
import { NavLink } from "@/components/Navbar/navbar.component";
import Link from "next/link";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import FaceBookIcon from "@/components/Icons/FaceBookIcon";
import ChevronIcon from "@/components/Icons/ChevronIcon";

const Footer: React.FC = () => {
  const navLinks: NavLink[] = [
    { value: "/", label: "Home" },
    { value: "/about-us", label: "About us" },
    { value: "/services", label: "Services" },
    { value: "/contact-us", label: "Contact us" },
  ];

  const navLinks1: NavLink[] = [
    { value: "#", label: "Privacy Policy" },
    { value: "#features", label: "Donate" },
    { value: "#how-it-works", label: "Pathologies" },
    { value: "/faq", label: "FAQ" },
  ];
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.curve} />
      <div className={styles.footerContents}>
        <div className={styles.footerContent}>
          <div className={styles.mengu}>
            <MenguIcon className={styles.menguIcon} />
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
          <h6>Quick Links</h6>
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
          <h6>Explore</h6>
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
          <h6>Social links</h6>
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
          ©{new Date().getFullYear()} all right reserved to Cabinet Mengu
          medical, Hopital de la Tour, geneva.
        </p>
        <div className={styles.footerButton}>
          <ChevronIcon className={styles.topIcon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
