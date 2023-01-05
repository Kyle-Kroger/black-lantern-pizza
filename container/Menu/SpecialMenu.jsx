import Image from "next/image";
import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data } from "../../constants";
import styles from "./SpecialMenu.module.css";

const SpecialMenu = () => (
  <div
    className={`${styles.app__specialMenu} flex__center section__padding`}
    id="menu"
  >
    <div className={`${styles["app__specialMenu-title"]}`}>
      <SubHeading title="Menu that fits your Palatte" />
      <h1 className={`headtext__cormorant`}>Specials</h1>
    </div>

    <div className={`${styles["app__specialMenu-menu"]}`}>
      <div className={`${styles["app__specialMenu-menu_wine"]} flex__center`}>
        <p className={`${styles["app__specialMenu-menu_heading"]}`}>
          Signature Pizzas
        </p>
        <div className={`${styles["app__specialMenu-menu_items"]}`}>
          {data.pizzas.map((pizza, i) => (
            <MenuItem
              key={pizza.title + i}
              title={pizza.title}
              price={pizza.price}
              tags={pizza.tags}
            />
          ))}
        </div>
      </div>

      <div className={`${styles["app__specialMenu-menu_img"]}`}>
        <Image
          className={styles.menuImage}
          src={"/images/menu-pizza.jpg"}
          alt="menu"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      <div
        className={`${styles["app__specialMenu-menu_cocktails"]} flex__center`}
      >
        <p className={`${styles["app__specialMenu-menu_heading"]}`}>
          Daily Specials
        </p>
        <div className={`${styles["app__specialMenu-menu_items"]}`}>
          {data.specials.map((cocktail, i) => (
            <MenuItem
              key={cocktail.title + i}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className={`custom__button`}>
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
