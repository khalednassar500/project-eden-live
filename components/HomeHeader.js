import styles from "@/styles/Home.module.css";

const HomeHeader = () => {
  return (
    <>
      <header className={styles.homeHeader}>
        <div className={styles.headerFront}>
          <h1>
            <span>Pioneering</span> <span>Smart</span> Solutions
            <br />
            for an Innovative <span>Lifestyle</span>.
          </h1>
        </div>
        <div className={styles.headerBack}>
          <div className={`${styles.light} ${styles.x1}`}></div>
          <div className={`${styles.light} ${styles.x2}`}></div>
          <div className={`${styles.light} ${styles.x3}`}></div>
          <div className={`${styles.light} ${styles.x4}`}></div>
          <div className={`${styles.light} ${styles.x5}`}></div>
          <div className={`${styles.light} ${styles.x6}`}></div>
          <div className={`${styles.light} ${styles.x7}`}></div>
          <div className={`${styles.light} ${styles.x8}`}></div>
          <div className={`${styles.light} ${styles.x9}`}></div>
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
