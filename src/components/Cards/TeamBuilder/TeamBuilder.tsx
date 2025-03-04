import styles from "./TeamBuilder.module.css";

const TeamBuilder = () => {
  return (
    <>
      <section className={styles.cardContainer}>
        <div>
          <h2 className={styles.title}>Team Builder</h2>
          <p className={styles.description}>
            Scans our talent network to create the optimal team for your project
          </p>
        </div>
        <img className={styles.icon}
          src="/src/assets/images/icon-team-builder.svg"
          alt="Image of Team-Builder icon"
        />
      </section>
    </>
  );
};

export default TeamBuilder;
