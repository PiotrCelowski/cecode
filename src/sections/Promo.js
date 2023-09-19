import styles from './Promo.module.css';
import scrum from '../assets/scrum.png';
import uiux from '../assets/uiux.png';
import programming from '../assets/programming.png';
import hosting from '../assets/hosting.png';
import seo from '../assets/seo.png';
import support from '../assets/support.png';
import maintenance from '../assets/maintenance.png';
import responsive from '../assets/responsive.png';
import ActivityCard from '../components/ActivityCard';
import { useInView } from 'react-intersection-observer';

export default function Promo() {
  const { ref: titleRef, inView } = useInView({ triggerOnce: true });

  return (
    <div className={styles.background}>
      <div className={styles.section}>
        <div className={styles.title}>
          <h1 ref={titleRef}>Czym się zajmujemy?</h1>
          <p>Budujemy strony i aplikacje internetowe.</p>
        </div>
        <div className={styles.cards_container}>
          <div className={`${styles.column} ${styles.moved_column}`}>
            <ActivityCard imagePath={scrum} text='Analiza i planowanie' inView={inView} delay={500}/>
            <ActivityCard imagePath={uiux} text='UI/UX' inView={inView} delay={1500}/>
            <ActivityCard imagePath={programming} text='Implementacja' inView={inView} delay={2500}/>
            <ActivityCard imagePath={responsive} text='Responsywność' inView={inView} delay={3500}/>
          </div>
          <div className={styles.column}>
            <ActivityCard imagePath={hosting} text='Hosting' inView={inView} delay={0}/>
            <ActivityCard imagePath={seo} text='Pozycjonowanie' inView={inView} delay={1000}/>
            <ActivityCard imagePath={maintenance} text='Utrzymanie' inView={inView} delay={2000}/>
            <ActivityCard imagePath={support} text='Wsparcie techniczne' inView={inView} delay={3000}/>
          </div>
        </div>
      </div>
    </div>
  );
};