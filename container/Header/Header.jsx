import React from "react";
import Image from "next/image";

import { SubHeading } from "../../components";

import styles from "./Header.module.css";
import { images } from "../../constants";

const Header = () => {
  return (
    <div
      className={`${styles.app__header} app__wrapper section__padding`}
      id="home"
    >
      <div className="app__wrapper_info">
        <SubHeading title="Chase a new flavor" />
        <h1 className={styles["app__header-h1"]}>
          Pizza Perfected over Generations
        </h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Step into the world of magic and deliciousness at The Black Lantern.
          Our enchanting pizza restaurant offers a cozy and inviting atmosphere
          where you can enjoy a slice of heaven with family and friends.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <Image
          className={styles.welcomeImage}
          src="/images/welcome-pizza.png"
          alt="welcome"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default Header;
