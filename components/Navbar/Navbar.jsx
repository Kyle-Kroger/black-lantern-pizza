import { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  return (
    <nav className={styles.app__navbar}>
      <div className={styles["app__navbar-logo"]}>
        <Image
          className={styles.logoImg}
          src="/images/logo-transparent.png"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      <ul className={styles["app__navbar-links"]}>
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={styles["app__navbar-login"]}>
        <a href="#login" className="p__opensans">
          Login / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className={styles["app__navbar-smallscreen"]}>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => settoggleMenu(true)}
          style={{ cursor: "pointer" }}
        />

        {toggleMenu && (
          <div
            className={`${styles["app__navbar-smallscreen_overlay"]} flex__center slide-bottom`}
          >
            <MdRestaurantMenu
              fontSize={27}
              className={styles.overlay__close}
              onClick={() => settoggleMenu(false)}
            />
            <ul className={styles["app__navbar-smallscreen_links"]}>
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
