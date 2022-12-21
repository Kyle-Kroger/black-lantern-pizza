import React from "react";
import Image from "next/image";

import { images } from "../../constants";

const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <Image src={images.spoon} alt="spoon" width={45} />
    </div>
  );
};

export default SubHeading;
