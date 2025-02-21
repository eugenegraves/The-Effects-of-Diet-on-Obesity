import styles from "./WelcomeStyles.module.css";
import sun from "../../assets/white-sun.png";
import moon from "../../assets/gold-moon.png";

import gsap from "gsap";
import { useEffect, useRef } from "react";

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
          color: "white",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          ease: "power1.out",
          duration: 0.4,
          backgroundColor: "#e6e6e6",
          color: "initial",
        });
      });
    }
  });

  return (
    <section className={styles.mainContainer}>
      <h1 ref={titleRef} className={styles.title}>
        Welcome
      </h1>
      <section className={styles.introduction}>
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
            placeholder="Please tell me your name"
          />
          <button ref={startRef} className={styles.startButton}>
            I&apos;m Ready
          </button>
        </form>
      </section>
    </section>
  );
}

export default Welcome;
