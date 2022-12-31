import React from "react";
import Image from "next/image";

import { SubHeading } from "../../components";
import styles from "./FindUs.module.css";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Here is an address for the place</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans" style={{ textTransform: "uppercase" }}>
          Mon - Fri: 10:00 am - 2:00 am
        </p>
        <p className="p__opensans" style={{ textTransform: "uppercase" }}>
          Sat - Sun: 10:00 am - 3:00 am
        </p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        Visit Us
      </button>
    </div>

    <div className="app__wrapper_img">
      <Image
        className={styles.findUsImg}
        src="/images/findus.png"
        alt="findus_image"
        width="0"
        height="0"
        sizes="100vw"
      />
    </div>
  </div>
);

export default FindUs;
