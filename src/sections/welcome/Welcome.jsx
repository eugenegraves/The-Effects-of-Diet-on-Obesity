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

  return (
    <section className={styles.mainContainer}>
      <h1 ref={titleRef}>Welcome</h1>
      <h2>
        Thank you for visiting, I&apos;m going to tell you a story about the
        evolution of our nutrition and health environment using some data
        I&apos;ve collected.
      </h2>
      <h2>
        My name is Gene and I will be your guide through our little journey
        today. I do hope you&apos;ll take something away from this experience!
      </h2>
      <h2>With that being said, let us begin...</h2>
    </section>
  );
}

export default Welcome;
