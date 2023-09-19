import styles from './Hero.module.css';
import hero from '../assets/hero.png';

export default function Hero() {
    return (
      <div className={styles.background}>
        <div className={styles.section}>
          <div className={styles.description}>
            <div className={styles.title}>
              <h1>Cecode</h1>
              <p>Zbudujemy dla Ciebie nowoczesną stronę internetową</p>
            </div>
            <button className={styles.button}>Zapytaj o wycenę</button>
          </div>
          <img src={hero}/>
        </div>
      </div>
    );
  };