import React, { useState } from "react";

import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import HelpIcon from "../Icons/HelpIcon";
import MenguIcon2 from "../Icons/MenguIcon2";
import HamburderIcon from "../Icons/HamburgerIcon";
import CloseHamburderIcon from "../Icons/CloseHamburgerIcon";
import i18n from "@/redux/i18n";

const Navbar: React.FC<Props> = ({ position = 0 }) => {
  const router = useRouter();
  const [active, setActive] = useState<boolean>(false);
  const navLinks: NavLink[] = [
    { value: "/", label: i18n.t('home') },
    { value: "/about-us", label: i18n.t('aboutUs') },
    { value: "/services", label: i18n.t('services') },
    { value: "/contact-us", label: i18n.t('contactUs') },
  ];
  return (
    <nav
      className={`${styles.container} ${
        position > 600 ? "bg-primary-300 shadow-md drop-shadow-md !fixed" : ""
      }`}
    >
      <div className={styles.iconContainer}>
        <MenguIcon2 className={styles.menguIcon} />
      </div>
      <div className={styles.navLinks}>
        {navLinks.map((navlink: NavLink, index: number) => (
          <Link
            key={index + navlink.value}
            href={navlink.value}
            className={styles.navLink}
          >
            {navlink.label}
          </Link>
        ))}
      </div>

      <button className={styles.donateButton}>Grant</button>
      <div
        onClick={() => setActive(!active)}
        className={`${styles.linkContainer} ${
          active ? "bg-transparent" : "bg-transparent"
        }`}
      >
        {active ? (
          <CloseHamburderIcon className="" />
        ) : (
          <HamburderIcon className="" />
        )}
      </div>
      <div
        onClick={() => setActive(!active)}
        className={`${styles.overlayContainer} ${
          active ? "right-0" : "!-right-full"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${styles.navLinksContainer}`}
        >
          <div className={styles.navLinksMD}>
            {navLinks.map((navlink: NavLink, index: number) => (
              <Link
                key={index + navlink.value}
                href={navlink.value}
                className={styles.navLinkMD}
              >
                {navlink.label}
              </Link>
            ))}
            <button className={styles.donateButtonMD}>Grant</button>
            <div className={styles.help}>
              <HelpIcon className={styles.helpIcon} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

interface Props {
  position?: number;
}

export interface NavLink {
  label: string;
  value: string;
}
