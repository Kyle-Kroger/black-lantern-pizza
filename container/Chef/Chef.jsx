import Image from "next/image";
import React from "react";

import { SubHeading } from "../../components";
import styles from "./Chef.module.css";

const Chef = () => (
  <div className={`app__bg app__wrapper section__padding`}>
    <div className={`app__wrapper_img app__wrapper_img-reverse`}>
      <Image
        className={styles.chefImage}
        src="/images/chef.png"
        alt="chef image"
        width="0"
        height="0"
        sizes="100vw"
      />
    </div>
    <div className={`app__wrapper_info`}>
      <SubHeading title="Chef's Word" />
      <h1 className={`headtext__cormorant`}>What We Believe In</h1>
      <div className={`${styles["app__chef-content"]}`}>
        <div className={`${styles["app__chef-content_quote"]}`}>
          <Image
            className={styles.quoteImage}
            src="/images/quote.png"
            alt="quote image"
            width="0"
            height="0"
            sizes="100vw"
          />
          <p className={`p__opensans`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
      </div>

      <div className={`${styles["app__chef-sign"]}`}>
        <p>Kevin Luo</p>
        <p className={`p__opensans`}>Chef & Founder</p>
        <Image
          className={styles.signImage}
          src="/images/sign.png"
          alt="sign image"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
    </div>
  </div>
);

export default Chef;
