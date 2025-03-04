import styles from "./Calculator.module.css";

const Calculator = () => {
  return (
    <>
      <section className={styles.cardContainer}>
        <div>
          <h2 className={styles.title}>Calculator</h2>
          <p className={styles.description}>
            Uses data from past projects to provide better delivery estimates
          </p>
        </div>
        <img className={styles.icon}
          src="./images/icon-calculator.svg"
          alt="Image of Calculator icon"
        />
      </section>
    </>
  );
};

export default Calculator;
