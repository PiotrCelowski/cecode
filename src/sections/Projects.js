import styles from './Projects.module.css';
import life from '../assets/life.png';
import ProjectCard from '../components/ProjectCard';
import multi from '../assets/multi.png'
import smartphone from '../assets/smartphone.png';
import rateit from '../assets/rateit.png';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const { ref: titleRef, inView } = useInView({ triggerOnce: true });

  return (
    <div className={styles.background}>
      <div className={styles.section}>
        <div className={styles.cards_container}>
          <div className={styles.column}>
            <ProjectCard imagePath={life} text='Your life' inView={inView} delay={0}/>
            <ProjectCard imagePath={rateit} text='Rate it' inView={inView} delay={1000}/>
          </div>
          <div className={`${styles.column} ${styles.moved_column}`}>
            <ProjectCard imagePath={multi} text='Space' inView={inView} delay={500}/>
            <ProjectCard imagePath={smartphone} text='Smartphone' inView={inView} delay={1500}/>
          </div>
        </div>
        <div className={styles.title}>
          <h1 ref={titleRef}>Zrealizowane projekty</h1>
          <p>Rzuć okiem na naszą pracę.</p>
        </div>
      </div>
    </div>
  );
};