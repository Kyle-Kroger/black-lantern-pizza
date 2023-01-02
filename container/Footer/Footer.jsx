import React from "react";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import styles from "./Footer.module.css";

const Footer = () => (
  <div className={`${styles["app__footer"]} section__padding`}>
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
