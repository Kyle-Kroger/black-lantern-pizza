import React from "react";
import Image from "next/image";

import { SubHeading } from "../../components";
import { data, images } from "../../constants";

import styles from "./Laurels.module.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div className={`${styles["app__laurels_awards-card"]}`}>
      <Image
        className={styles.awardImg}
        src={imgUrl}
        alt="title"
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className={`${styles["app__laurels_awards-card_content"]}`}>
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p__cormorant">{subtitle}</p>
      </div>
    </div>
  );
};

const Laurels = () => (
  <div className={`app__bg app__wrapper section__padding`} id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className={`${styles["app__laurels_awards"]}`}>
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <Image
        className={styles.laurelsImg}
        src={images.laurels}
        alt="laurels"
        width="0"
        height="0"
        sizes="100vw"
      />
    </div>
  </div>
);

export default Laurels;
