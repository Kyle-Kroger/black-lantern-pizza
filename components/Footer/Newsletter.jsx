import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import styles from "./Newsletter.module.css";

const Newsletter = () => (
  <div className={styles.app__newsletter}>
    <div className={styles["app__newsletter-heading"]}>
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">Never miss an update</p>
    </div>
    <div className={`${styles["app__newsletter-input"]} flex__center`}>
      <input type="email" placeholder="enter your email" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
