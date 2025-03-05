import { useRef, useEffect, useState, use } from "react";
import styles from "./baseDiscoveryStyles.module.css";
import SugarObesityGraph from "../../data-components/sugarObesityGraph/SugarObesityGraph";
import Popup from "../../accessory-components/popup/Popup";
import { TypeAnimation } from 'react-type-animation';
import gsap from "gsap";

function BaseDiscovery() {

    const thesisRef = useRef(null);
    useEffect(() => {
        gsap.set(thesisRef.current, {
            opacity: 0,
            y: -50,
            display: "none",
        });
        gsap.to(thesisRef.current, {
            duration: 4,
            opacity: 1,
            y: 0,
            ease: "power1.out",
            delay: 2.5,
            display: "block",
        });
    }, []);

    const initialGraphRef = useRef(null);
    useEffect(() => {
        gsap.set(initialGraphRef.current, {
            opacity: 0,
            x: -50,
            display: "none",
        });
        gsap.to(initialGraphRef.current, {
            duration: 4,
            opacity: 1,
            x: 0,
            ease: "power1.out",
            delay: 17.5,
            display: "block",
        });
    }, []);

    const asideRef = useRef(null);
    useEffect(() => {
        gsap.set(asideRef.current, {
            opacity: 0,
            y: 50,
            display: "none",
        });
        gsap.to(asideRef.current, {
            duration: 3,
            opacity: 1,
            y: 0,
            ease: "power1.out",
            delay: 19,
            display: "block",
        });
    }, []);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleComplete = () => {
        setIsPopupOpen(true);
    };

    return (
        <>
            <main className={styles.main}>
                <div ref={thesisRef} className={`${styles.dataRow} ${styles.dataElement}`}>
                    <TypeAnimation className={styles.storyText} sequence={[
                        3250,
                        'The question I have decided to explore is: What effect do things such as sugar, diet composition, & daily amounts of all of these things have on global obesity rates? Moreover, how pronounced are the effects of each?',
                    ]}
                    cursor={false}
                    />
                </div>
                <div className={styles.dataRow}>
                    <div ref={initialGraphRef} className={`${styles.initialGraph} ${styles.dataElement}`}>
                        <SugarObesityGraph></SugarObesityGraph>
                    </div>
                    <div ref={asideRef} className={`${styles.otherMedia} ${styles.dataElement}`}>
                        <TypeAnimation className={styles.storyText} sequence={[
                            19050,
                            'I decided to start by gathering data on sugar consumption and obesity rates in various countries.',
                        ]}
                        cursor={false}
                        />
                        <br/><br/>
                        <TypeAnimation className={styles.storyText} sequence={[
                            26500,
                            ' What is displayed in the resulting graph is the sugar consumption and obesity rates of the top 10 most populous countries in the world.',
                            handleComplete,
                        ]}
                        cursor={false}
                        />
                    </div>
                </div>
            </main>
            <Popup 
                isOpen={isPopupOpen} 
                onClose={() => setIsPopupOpen(false)}
            >
                <h2>Important Instructions!</h2>
                <br/>
                <p>To view each country's obesity percentage & sugar intake use the dropdown filter list below the graph.</p>
            </Popup>
        </>
    );
}

export default BaseDiscovery;