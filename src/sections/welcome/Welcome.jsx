import styles from "./WelcomeStyles.module.css";
import "../../WarpEffect.css";
import sun from "../../assets/white-sun.png";
import moon from "../../assets/gold-moon.png";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from "react-router-dom";

function Welcome() {
  /*Fade In Effect for Title Text*/
  const titleRef = useRef(null);
  useEffect(() => {
    gsap.set(titleRef.current, {
      opacity: 0,
    });

    gsap.to(titleRef.current, {
      duration: 4,
      opacity: 1,
      ease: "power1.out",
      delay: 0.5,
    });
  }, []);

  /*Fade In Effect for Introduction Container*/
  const introContainerRef = useRef(null);
  useEffect(() => {
    gsap.set(introContainerRef.current, {
      opacity: 0,
    });

    gsap.to(introContainerRef.current, {
      duration: 4,
      opacity: 1,
      ease: "power1.out",
      delay: 4.5,
    });
  }, []);

  /*Color Change Effect for Start Button*/
  const startRef = useRef(null);
  useEffect(() => {
    const button = startRef.current;

    if (button) {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          ease: "power1.out",
          duration: 0.4,
          backgroundColor: "#111",
          color: "transparent",
          webkitBackgroundClip: "text",
          webkitTextFillColor: "transparent",
          backgroundImage: "linear-gradient(to right, #a2682a 0%, #be8c3c 8%, #be8c3c 18%, #d3b15f 27%, #faf0a0 35%, #ffffc2 40%, #faf0a0 50%, #d3b15f 58%, #be8c3c 67%, #b17b32 77%, #bb8332 83%, #d4a245 88%, #e1b453 93%, #a4692a 100%)",
          borderImageSource: "linear-gradient(to right, #a2682a 0%, #be8c3c 8%, #be8c3c 18%, #d3b15f 27%, #faf0a0 35%, #ffffc2 40%, #faf0a0 50%, #d3b15f 58%, #be8c3c 67%, #b17b32 77%, #bb8332 83%, #d4a245 88%, #e1b453 93%, #a4692a 100%)",
          borderImageSlice: 1,
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          ease: "power1.out",
          duration: 0.4,
          backgroundColor: "#e6e6e6",
          color: "initial",
          webkitBackgroundClip: "initial",
          webkitTextFillColor: "initial",
          backgroundImage: "none",
          borderImageSource: "none",
        });
      });
    }
  }, []);

  /* Warp Transition to Discovery Page */
  const [isWarping, setIsWarping] = useState(false);
  const navigate = useNavigate();
  
  const handleWarpClick = () => {
    gsap.to(introContainerRef.current, {
      duration: 1,
      opacity: 0,
      ease: "power1.out",
    });
    gsap.to(titleRef.current, {
      duration: 1,
      opacity: 0,
      ease: "power1.out",
    });
    setIsWarping(true);
    setTimeout(() => {
      navigate("/discovery");
      setIsWarping(false);
    }, 2500);
  };

  return (
    <section className={styles.mainContainer}>
      <h1 ref={titleRef} className={styles.title}>
        Welcome
      </h1>
      <section ref={introContainerRef} className={styles.introduction}>
        <h2>
          Thank you for visiting, I&apos;m going to tell you a story about the
          evolution of our nutrition and health environment using some data
          I&apos;ve collected.
        </h2>
        <h2>
          My name is <span className={styles.emphasis}>Gene</span> and I will be
          your guide through our little journey today. I do hope you&apos;ll
          take something away from this experience!
        </h2>
        <h2>With that being said, let us begin...</h2>
        <form className={styles.nameSubmission}>
          <input
            className={styles.nameInput}
            type="text"
            placeholder="Enter your name"
          />
          <button ref={startRef} className={styles.startButton} onClick={handleWarpClick} disabled={isWarping}>
            I&apos;m Ready
          </button>
          {isWarping && <div className="warp-effect"></div>}
        </form>
      </section>
    </section>
  );
}

export default Welcome;
