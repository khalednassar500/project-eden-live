import styles from "@/styles/Loading.module.css";
const MainLoading = ({ loading }) => {
  return (
    <div
      className={`${styles.mainLoading} ${!loading && styles.removeLoading}`}
    >
      <img src="/assets/icons/loading.svg" alt="loading icon" />
    </div>
  );
};

export default MainLoading;
