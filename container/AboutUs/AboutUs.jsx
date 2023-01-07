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

    <div className={`${styles["app__aboutus-content"]}`}>
      <div className={styles["app__aboutus-content_about"]}>
        <div>
          <h1 className="headtext__cormorant">About Us</h1>
          <Image src={images.spoon} alt="about_spoon" className="spoon__img" />
        </div>

        <p className="p__opensans">
          Welcome to The Black Lantern, where we're serving up slices of magic
          in every bite. Our pizzas are crafted with the finest ingredients,
          from the freshest vegetables to the most savory meats, and we never
          skimp on the cheese. We believe that a great pizza is more than just a
          meal – it's an experience that brings people together. That's why
          we've created a warm and welcoming atmosphere that's perfect for
          enjoying a slice with friends or family.
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
        <div>
          <h1 className="headtext__cormorant">Our History</h1>
          <Image src={images.spoon} alt="about_spoon" className="spoon__img" />
        </div>

        <p className="p__opensans">
          Founded over a century ago by a coven of witches, The Black Lantern
          has been serving up spellbinding pizzas to the community ever since.
          The original recipe for the restaurant's signature crust was
          discovered during a séance, and the secret has been passed down
          through generations. Today, The Black Lantern remains a beloved
          institution, where locals and visitors alike come to indulge in the
          magic of great pizza.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
