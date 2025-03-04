import styles from "./baseDiscoveryStyles.module.css";
import SugarObesityGraph from "../../data-components/sugarObesityGraph/SugarObesityGraph";
import gsap from "gsap";

function BaseDiscovery() {
    return (
        <>
            <header className={styles.header}>
                <h3 className={styles.options}>1</h3>
                <h3 className={styles.options}>2</h3>
                <h3 className={styles.options}>3</h3>
                <h3 className={styles.options}>4</h3>
            </header>
            <main className={styles.main}>
                <div className={styles.dataRow}>
                    <div className={`${styles.initialGraph} ${styles.dataElement}`}>
                        <SugarObesityGraph></SugarObesityGraph>
                    </div>
                    <div className={`${styles.otherMedia} ${styles.dataElement}`}>B</div>
                </div>
            </main>
        </>
    );
}

export default BaseDiscovery;