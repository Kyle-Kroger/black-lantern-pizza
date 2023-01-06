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
            As head chef of The Black Lantern, I'm honored to continue the
            tradition of crafting pizzas that are truly magical. Every
            ingredient we use is carefully chosen for its quality and flavor,
            and we infuse each pizza with a touch of enchantment that sets it
            apart. I'm proud to carry on the legacy of the "witches" who founded
            this restaurant, and to bring a little bit of magic to every slice
            we serve.
          </p>
        </div>
      </div>

      <div className={`${styles["app__chef-sign"]}`}>
        <p>- Chef Isadora O'Sullivan</p>
        <p className={`p__opensans`}>Part-time Witch, Full-time Chef</p>
      </div>
    </div>
  </div>
);

export default Chef;
