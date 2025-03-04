import styles from "./Karma.module.css";

const Karma = () => {
  return (
    <>
      <section className={styles.cardContainer}>
        <div>
          <h2 className={styles.title}>Karma</h2>
          <p className={styles.description}>Regularly evaluates our talent to ensure quality</p>
        </div>
        <img className={styles.icon}
          src="/src/assets/images/icon-karma.svg"
          alt="Image of Karma icon"
        />
      </section>
    </>
  );
};

export default Karma;
