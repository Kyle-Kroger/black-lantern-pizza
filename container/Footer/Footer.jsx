import React from "react";
import Image from "next/image";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import styles from "./Footer.module.css";

const Footer = () => (
  <div className={`${styles["app__footer"]} section__padding`}>
    <FooterOverlay />
    <Newsletter />

    <div className={`${styles["app__footer-links"]}`}>
      <div className={styles["app__footer-links_contacts"]}>
        <h1 className={`${styles["app__footer-headtext"]}`}>Contact Us</h1>
        <p className="p__opensans">Address goes here</p>
        <p className="p__opensans">+1 212-344-1230</p>
      </div>
      <div className={`${styles["app__footer-links_logo"]}`}>
        <Image
          className={styles.logoImg}
          src="/images/gericht.png"
          alt="footer_image"
          width="0"
          height="0"
          sizes="100vw"
        />
        <p className="p__opensans" style={{ textTransform: "none" }}>
          "The best way to find yourself is to lose yourself in the service of
          others."
        </p>
        <Image
          className={styles.spoonImg}
          src="/images/spoon.png"
          alt="spoon_image"
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className={`${styles["app__footer-links_icons"]}`}>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className={`${styles["app__footer-links_work"]}`}>
        <h1 className={`${styles["app__footer-headtext"]}`}>Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">10:00 am - 2:00 am</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">10:00 am - 3:00 am</p>
      </div>
    </div>
    <div className={`${styles["app__footer-copyright"]}`}>
      <p className="p__opensans">
        2023 Black Lantern Pizza. All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
