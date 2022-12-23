import React from "react";
import Image from "next/image";

import { images } from "../../constants";
import styles from "./AboutUs.module.css";

const AboutUs = () => (
  <div
    className={`${styles.app__aboutus} app__bg flex__center section__padding`}
    id="about"
  >
    <div className={`${styles["app__aboutus-overlay"]} flex__center`}>
      <Image className={styles.gOverlay} src={images.G} alt="G letter" />
    </div>

    <div className={`${styles["app__aboutus-content"]} flex__center`}>
      <div className={styles["app__aboutus-content_about"]}>
        <h1 className="headtext__cormorant">About Us</h1>
        <Image src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className={`${styles["app__aboutus-content_knife"]} flex__center`}>
        <Image className={styles.knife} src={images.knife} alt="knife" />
        <Image
          className={styles.knifeRotate}
          src={"/images/knifeRotate.png"}
          alt="knifeRotated"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      <div className={styles["app__aboutus-content_history"]}>
        <h1 className="headtext__cormorant">Our History</h1>
        <Image src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
