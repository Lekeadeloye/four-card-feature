import styles from "./Card.module.css";
import { CardProp } from "../Homepage/Homepage";

const Card = ({title, description, image, color}: CardProp) => {
  return (
    <section className={styles.cardContainer} style={{ borderTop: `5px solid ${color}` }}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>
          {description}
        </p>
      </div>
      <img
        className={styles.icon}
        src={image}
        alt={title}
      />
    </section>
  );
};

export default Card;
