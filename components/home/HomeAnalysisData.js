import styles from "@/styles/Home.module.css";
const HomeAnalysisData = () => {
  return (
    <div className={styles.homeAnalysis}>
      <h3>
        proud that our services reach many customers
        <br />
        with great feedback.
      </h3>

      <div className={styles.homeAnalysisData}>
        <div>
          <p>places</p>
          <h4>123</h4>
        </div>
        <div>
          <p>customers</p>
          <h4>1426</h4>
        </div>
        <div>
          <p>Individuales</p>
          <h4>1538</h4>
        </div>
      </div>
    </div>
  );
};

export default HomeAnalysisData;
