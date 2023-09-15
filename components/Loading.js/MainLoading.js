import styles from "@/styles/Loading.module.css";
const MainLoading = ({ loading }) => {
  return (
    <div
      className={`${styles.mainLoading} ${!loading && styles.removeLoading}`}
    >
      ssss
    </div>
  );
};

export default MainLoading;
