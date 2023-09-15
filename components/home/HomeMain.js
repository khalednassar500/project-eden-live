import styles from "@/styles/Home.module.css";
import HomeCategoriesCon from "./HomeCategoriesCon";
import HomeAnalysisData from "./HomeAnalysisData";

const HomeMain = () => {
  return (
    <main className={styles.homeMain}>
      <h2 className={styles.mainTitle}>
        <span>Explore a world of possibilities</span>
        <br />
        with our cutting-edge solutions.
        <br />
      </h2>

      <div className={styles.homeMainSearch}>
        <div className={styles.homeMainSearchImg}>
          <img src="/assets/icons/smart-search.svg" alt="search icon" />
        </div>
      </div>

      <HomeCategoriesCon />
      <HomeAnalysisData />
    </main>
  );
};

export default HomeMain;
