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
        <SubHeading title="Chase the new flavor" />
        <h1 className={styles["app__header-h1"]}>The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <Image
          className={styles.welcomeImage}
          src={images.welcome}
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
