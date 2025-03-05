import styles from "./Homepage.module.css";
import Card from "../UI/Card";

export interface CardProp {
  number?: number;
  title: string;
  description: string;
  image: string;
  color: string;
  name?: string;
}
const Homepage = () => {

  const cards: CardProp[] = [
    {
      number: 1,
      title: "Calculator",
      name: "calculator",
      description:
        "Uses data from past projects to provide better delivery estimates",
      image: "./images/icon-calculator.svg",
      color: "hsl(212, 86%, 64%)",
    },
    {
      number: 2,
      title: "Karma",
      name: "karma",

      description: "Regularly evaluates our talent to ensure quality",
      image: "./images/icon-karma.svg",
      color: "hsl(34, 97%, 64%)",
    },
    {
      number: 3,
      title: "Team Builder",
      name: "teamBuilder",

      description:
        "Scans our talent network to create the optimal team for your project",
      image: "./images/icon-team-builder.svg",
      color: "hsl(212, 86%, 64%)",
    },
    {
      number: 4,
      title: "Supervisor",
      name: "supervisor",

      description: "Monitors activity to identify project roadblocks",
      image: "./images/icon-supervisor.svg",
      color: "hsl(180, 62%, 55%)",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.headers}>
        <h1 className={styles.title}>Reliable, efficient delivery</h1>
        <h2 className={styles.subTitle}>Powered by Technology</h2>
      </div>
      <div className={styles.description}>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <section className={styles.cardContainer}>
        {cards.map(card => (
          <div key={card.number} className={styles[card.name ?? ''] }>
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
              color={card.color}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Homepage;
