import { useRef, useEffect, useState, use } from "react";
import styles from "./BaseDiscoveryStyles.module.css";
import SugarObesityGraph from "../../data-components/sugarObesityGraph/SugarObesityGraph";
import DairyEggsTable from "../../data-components/dairyEggsTable/DairyEggsTable";
import CalorieComodityChart from "../../data-components/calorieCommodityChart/CalorieCommodityChart";
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
            duration: 2,
            opacity: 1,
            y: 0,
            ease: "power1.out",
            delay: 1,
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
            duration: 2,
            opacity: 1,
            x: 0,
            ease: "power1.out",
            delay: 7,
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
            duration: 2,
            opacity: 1,
            y: 0,
            ease: "power1.out",
            delay: 8,
            display: "block",
        });
    }, []);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleComplete = () => {
        setIsPopupOpen(true);
    };

    const [partTwoAnimation, setPartTwoAnimation] = useState(false);
    const [showDescriptor, setShowDescriptor] = useState(false);
    const story1Ref = useRef(null);

    const handlePopupTrigger = () => {
        setIsPopupOpen(false);
        
        gsap.set(story1Ref.current, {
            opacity: 0,
            y: 50,
        });
        
        setTimeout(() => {
            setPartTwoAnimation(true);

            requestAnimationFrame(() => {
                gsap.fromTo(story1Ref.current, 
                    {
                        opacity: 0,
                        y: 50
                    },
                    {
                        duration: 2,
                        opacity: 1,
                        y: 0,
                        ease: "power1.out",
                        onComplete: () => {
                            setTimeout(() => {
                                setShowDescriptor(true);
                            }, 1000);
                        }
                    }
                );
            });
        }, 500);
    };

    const pieRef = useRef(null);
    useEffect(() => {
        gsap.set(pieRef.current, {
            opacity: 0,
            y: 50,
            display: "none",
        });
        gsap.to(pieRef.current, {
            duration: 2,
            opacity: 1,
            y: 0,
            ease: "power1.out",
            delay: 17,
            display: "block",
        });
    }, []);

    const dairyEggRef = useRef(null);
    useEffect(() => {
        gsap.set(dairyEggRef.current, {
            opacity: 0,
            x: 50,
            display: "none",
        });
        gsap.to(dairyEggRef.current, {
            duration: 2,
            opacity: 1,
            x: 0,
            ease: "power1.out",
            delay: 22,
            display: "block",
        });
    }, []);

    const descriptorRef = useRef(null);
    useEffect(() => {
        gsap.set(descriptorRef.current, {
            opacity: 0,
            x: -50,
            display: "none",
        });
        gsap.to(descriptorRef.current, {
            duration: 2,
            opacity: 1,
            x: 0,
            ease: "power1.out",
            delay: 20,
            display: "block",
        });
    }, []);

    return (
        <>
            <main className={styles.main}>
                <div ref={thesisRef} className={`${styles.dataRow} ${styles.dataElement}`}>
                    <TypeAnimation className={styles.storyText} sequence={[
                        1500,
                        'The question I have decided to explore is: What effect do things such as sugar, diet composition, & daily amounts of all of these things have on global obesity rates? Moreover, how pronounced are the effects of each?',
                    ]}
                    cursor={false}
                    speed={75}
                    />
                </div>
                <div className={styles.dataRow}>
                    <div ref={initialGraphRef} className={`${styles.initialGraph} ${styles.dataElement}`}>
                        <SugarObesityGraph></SugarObesityGraph>
                    </div>
                    <div ref={asideRef} className={`${styles.otherMedia} ${styles.dataElement}`}>
                        <TypeAnimation className={styles.storyText} sequence={[
                            7500,
                            'I decided to start by gathering data on sugar consumption and obesity rates in various countries.',
                        ]}
                        cursor={false}
                        speed={75}
                        />
                        <br/><br/>
                        <TypeAnimation className={styles.storyText} sequence={[
                            10000,
                            ' What is displayed in the resulting graph is the sugar consumption and obesity rates of the top 10 most populous countries in the world.',
                            handleComplete,
                        ]}
                        cursor={false}
                        speed={75}
                        />
                    </div>
                </div>
                {partTwoAnimation && (
                    <div ref={story1Ref} className={`${styles.dataRow} ${styles.dataElement}`}>
                        <div className="styles.transitionText">
                            <p>What I found was that there is a clear correlation between sugar consumption and obesity rates. . .</p>
                            <br/><br/>
                            <p>However upon further inspection, I found that the correlation is not as clear cut as I originally thought. The correlation was straightforward with 3 countries (USA, India & Pakistan) but with the others there were weird pattern breaks that suggest the influence of other factors when it comes to the prevlence of obesity.</p>
                        </div>
                    </div>
                )}
                <div ref={pieRef} className={`${styles.dataRow} ${styles.dataElement}`}>
                    <CalorieComodityChart></CalorieComodityChart>
                </div>
                <div className={`${styles.dataRow} ${styles.responsiveCell}`}>
                    <div ref={descriptorRef} className={`${styles.dataElement} ${styles.graphDescriptor}`}>
                        {showDescriptor && (
                            <TypeAnimation 
                            className={styles.descriptorText} 
                                sequence={[
                                    'In the following table, you can see the average daily intake of dairy and eggs in the same countries that were previously mentioned.',
                                    1000,
                                    'In the following table, you can see the average daily intake of dairy and eggs in the same countries that were previously mentioned. Zooming in on this subset of nutrition data showed me some surprising correlations. \n\nFor example, the countries with the highest obesity rates also have the highest dairy and egg consumption.',
                                ]}
                                cursor={false}
                                speed={65}
                            />
                        )}
                    </div>
                    <div ref={dairyEggRef} className={styles.dataElement}>
                        <DairyEggsTable></DairyEggsTable>
                    </div>
                </div>
            </main>
            <Popup 
                isOpen={isPopupOpen} 
                onClose={handlePopupTrigger}
            >
                <h2>Important Instructions!</h2>
                <br/>
                <p>To view each country's obesity percentage & sugar intake use the dropdown filter list below the graph.</p>
            </Popup>
        </>
    );
}

export default BaseDiscovery;