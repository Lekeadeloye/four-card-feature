import styles from "./Supervisor.module.css";

const Supervisor = () => {
  return (
    <>
      <section className={styles.cardContainer}>
        <div>
          <h2 className={styles.title}>Supervisor</h2>
          <p className={styles.description}>
            Monitors activity to identify project roadblocks
          </p>
        </div>
        <img className={styles.icon}
          src="./images/icon-supervisor.svg"
          alt="Image of Supervisor icon"
        />
      </section>
    </>
  );
};

export default Supervisor;
