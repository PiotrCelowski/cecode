import styles from './ActivityCard.module.css';
import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';

export default function ActivityCard({ imagePath, text, inView, delay }) {
    const cardRef = useRef(null);
    const [cardActive, setCardActive] = useState(false);

    if (inView) {
        setTimeout(() => {setCardActive(true)}, delay)
    }

    return (
        <Transition nodeRef={cardRef} in={cardActive} timeout={1000}>
            {state => {
                const animationClassName = state === 'exited' ? styles.cardHidden : state === 'entering' ? styles.cardVisible : null;
                return (
                    <div ref={cardRef} className={`${styles.card} ${animationClassName}`}>
                        <img className={styles.miniImage} src={imagePath} />
                        <p>{text}</p>
                    </div>)
            }}
        </Transition>
    );
}