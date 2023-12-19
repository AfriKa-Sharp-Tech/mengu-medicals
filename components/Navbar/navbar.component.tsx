import React from "react";

import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import MenguIcon from "../Icons/MenguIcon";
import Link from "next/link";

const Navbar: React.FC<Props> = ({ position = 0 }) => {
  const router = useRouter();
  const navLinks: NavLink[] = [
    { value: "/", label: "Home" },
    { value: "/about-us", label: "About us" },
    { value: "/services", label: "Services" },
    { value: "/contact-us", label: "Contact us" },
  ];
  return (
    <nav className={`${styles.container} ${position > 600 ? "bg-primary-700 shadow-secondary-300 shadow-md drop-shadow-md" : ""}`}>
      <div className={styles.iconContainer}>
        <MenguIcon className={styles.menguIcon} />
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