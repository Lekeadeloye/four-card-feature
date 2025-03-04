import styles from './Card.module.css'
import calculator from '../../assets/images/icon-calculator.svg'


interface Card {
  title: string;
  description: string;
  image: string;
  imageDescription: string
}

const cards: Card[] = [
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    image: '/src/assets/images/icon-supervisor.svg',
    imageDescription: 'Image of Supervisor icon',
    borderColor: 'hsl(180, 62%, 55%)'
  },
  {
    title: 'Team Builder',
    description: 'Scans our talent network to create the optimal team for your project',
    image: '/src/assets/images/icon-team-builder.svg',
    imageDescription: 'Image of Team-Builder icon',
    borderColor: 'hsl(0, 78%, 62%)'



  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    image: '/src/assets/images/icon-karma.svg',
    imageDescription: 'Image of Karma icon',
    borderColor: 'hsl(34, 97%, 64%)'


  },
  {
    title: 'Calculator',
    description: 'Uses data from past projects to provide better delivery estimates',
    image: '/src/assets/images/icon-calculator.svg',
    imageDescription: 'Image of Calculator icon',
    borderColor: 'hsl(212, 86%, 64%)'
  },
]
const Card = () => {

  return (
    <>
      {cards.map(card => (
        <section className={styles.cardContainer}>
          <h1>{card.title}</h1>
          <p>{card.description}</p>
          <div>
            <img src={card.image} alt={card.imageDescription} />
          </div>
        </section>
      ))}
    </>
  );
}

export default Card

