import React from "react";
import Image from "next/image";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import styles from "./Gallery.module.css";

const imageArr = [
  "pizza-one.jpg",
  "alfredo.jpg",
  "spaghetti-carbonara.jpg",
  "gallery02.png",
  "gallery03.png",
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className={`${styles["app__gallery"]} flex__center section__padding`}>
      <div className={`${styles["app__gallery-content"]}`}>
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "2rem" }}>
          Explore the magic of The Black Lantern through our photo gallery,
          showcasing the ambiance and delicious food that make our restaurant a
          truly enchanting experience.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className={`${styles["app__gallery-images"]}`}>
        <div
          className={`${styles["app__gallery-images_container"]}`}
          ref={scrollRef}
        >
          {imageArr.map((image, index) => (
            <div
              className={`${styles["app__gallery-images_card"]} flex__center`}
              key={`gallery_image-${index + 1}`}
            >
              <Image
                className={styles.galleryImg}
                src={`/images/${image}`}
                alt="gallery_image"
                width="0"
                height="0"
                sizes="100vw"
              />
              <BsInstagram className={styles.instaIcon} />
            </div>
          ))}
        </div>
        <div className={`${styles["app__gallery-images_arrows"]}`}>
          <BsArrowLeftShort
            className={styles.arrowIcon}
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className={styles.arrowIcon}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
