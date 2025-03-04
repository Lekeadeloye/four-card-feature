import styles from "./Homepage.module.css";
import Supervisor from "../Cards/Supervisor/Supervisor";
import TeamBuilder from "../Cards/TeamBuilder/TeamBuilder";
import Karma from "../Cards/Karma/Karma";
import Calculator from "../Cards/Calculator/Calculator";

const Homepage = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.headers}>
          <h1 className={styles.title}>Reliable, efficient delivery</h1>
          <h2 className={styles.subTitle}>Powered by Technology</h2>
        </div>
        <div className={styles.description}>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <section className={styles.cardContainer}>
          <div className={styles.supervisor}>
            <Supervisor />
          </div>
          <div className={styles.teamBuilder}>
            <TeamBuilder />
          </div>
          <div className={styles.karma}>
            <Karma />
          </div>
          <div className={styles.calculator}>
            <Calculator />
          </div>
        </section>
      </section>
    </>
  );
};

export default Homepage;
