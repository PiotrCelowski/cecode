import styles from './OpinionCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons'

export default function OpinionCard({image_path, title, opinion}) {
    return (
        <div className={styles.card}>
            <img className={styles.mini_image} src={image_path} />
            <div className={styles.rating_container}>
                <h2>{title}</h2>
                <p>{opinion}</p>
                <div className={styles.rating}>
                    <FontAwesomeIcon icon={fullStar} className={styles.checked}/>
                    <FontAwesomeIcon icon={fullStar} className={styles.checked}/>
                    <FontAwesomeIcon icon={fullStar} className={styles.checked}/>
                    <FontAwesomeIcon icon={fullStar} className={styles.checked}/>
                    <FontAwesomeIcon icon={fullStar} className={styles.unchecked}/>
                    <p>5/5</p>
                </div>
            </div>
        </div>
    );
}