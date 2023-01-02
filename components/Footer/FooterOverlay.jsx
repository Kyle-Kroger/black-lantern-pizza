import React from "react";

import styles from "./FooterOverlay.module.css";

const FooterOverlay = () => (
  <div className={styles.app__footerOverlay}>
    <div className={styles["app__footerOverlay-black"]}></div>
    <div className={`${styles["app__footerOverlay-img"]} app__bg`}></div>
  </div>
);

export default FooterOverlay;
