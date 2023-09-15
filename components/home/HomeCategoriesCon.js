import styles from "@/styles/Home.module.css";
import HomeCategoryList from "./HomeCategoryList";
import HomeServiceList from "./HomeServiceList";
import { useState } from "react";

const HomeCategoriesCon = () => {
  const [currentList, setCurrentList] = useState("categories");
  return (
    <section>
      <div className={styles.switchBtns}>
        <div className={`${currentList === "categories" && styles.activeBtn}`}>
          <button onClick={() => setCurrentList("categories")}>
            by category
          </button>
        </div>
        <div className={`${currentList === "services" && styles.activeBtn}`}>
          <button onClick={() => setCurrentList("services")}>by service</button>
        </div>
      </div>

      <section className={styles.itemsCon}>
        {/* for design --- */}
        <div className={styles.itemsBackDesign}>
          <div>﹋</div>
          <div>⦿</div>
          <div>⎔</div>
          <div>◇</div>
        </div>

        <h3 className={styles.categoryTitle}>{currentList}</h3>
        {currentList === "categories" && <HomeCategoryList />}
        {currentList === "services" && <HomeServiceList />}
      </section>
    </section>
  );
};

export default HomeCategoriesCon;
