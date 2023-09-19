import styles from './Opinions.module.css';
import programmer1 from '../assets/programmer1.jpg';
import programmer2 from '../assets/programmer2.jpg';
import OpinionCard from '../components/OpinionCard';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Opinions() {
    return (
        <div className={styles.background}>
            <div className={styles.section}>
                <div className={styles.title}>
                    <h1>Co mówią nasi klienci?</h1>
                </div>
                <CarouselProvider
                    naturalSlideHeight={30}
                    naturalSlideWidth={100}
                    totalSlides={3}
                    visibleSlides={1}
                    className={styles.carouselStyle}
                    isPlaying={true}
                    interval={5000}
                    playDirection='forward'
                    infinite={false}
                >
                    <Slider>
                        <Slide index={0}>
                            <div className={styles.opinions_container}>
                                <OpinionCard image_path={programmer1} title='Przemek' opinion='Polecam firmę Cecode. Wykonali kawał dobrej roboty.' />
                                <OpinionCard image_path={programmer2} title='Andrzej' opinion='Niezły design. Na pewno wrócę.' />
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className={styles.opinions_container}>
                                <OpinionCard image_path={programmer1} title='Przemek' opinion='Polecam firmę Cecode. Wykonali kawał dobrej roboty.' />
                                <OpinionCard image_path={programmer2} title='Andrzej' opinion='Niezły design. Na pewno wrócę.' />
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className={styles.opinions_container}>
                                <OpinionCard image_path={programmer1} title='Przemek' opinion='Polecam firmę Cecode. Wykonali kawał dobrej roboty.' />
                                <OpinionCard image_path={programmer2} title='Andrzej' opinion='Niezły design. Na pewno wrócę.' />
                            </div>
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    )
}