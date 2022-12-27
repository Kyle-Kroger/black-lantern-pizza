import React from "react";

import styles from "./Intro.module.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevState) => !prevState);

    //Will use the state before the state is changed above
    //due to how react queues up state changes
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <>
      <div className={`${styles["app__video"]}`}>
        <video
          className={styles.introVideo}
          src="/video/meal.mp4"
          ref={vidRef}
          type="video/mp4"
          alt="intro_video"
          loop
          controls={false}
          muted
        />
        <div className={`${styles["app__video-overlay"]} flex__center`}>
          <div
            className={`${styles["app__video-overlay_circle"]} flex__center`}
            onClick={handleVideo}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
