import ImageSlider from './../ImageSlider/ImageSlider'
import styles from './HomePage.module.css'
import gotgcard from '@/assets/images/gotg.jpeg'
import gotgtitle from '@/assets/images/gotg2title.png'
import mandaloriancard from '@/assets/images/mandalorian.jpeg'
import mandaloriantitle from '@/assets/images/mandaloriantitle.png'
import starwarsvisionscard from '@/assets/images/starwarsvisions.jpeg'
import starwarsvisionstitle from '@/assets/images/starwarsvisionstitle.png'
import Header from './../Header/Header'
import Companies from './../Companies/Companies'
import StarWars from './../StarWars/StarWars'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'
import Recommended from '../Recommended/Recommended'

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        { img: gotgcard, title: gotgtitle, description: 'Nos preparamos para Guardianes de la Galaxia Vol. 3' },
        { img: mandaloriancard, title: mandaloriantitle, description: 'Todos los capítulos ya disponibles' },
        { img: starwarsvisionscard, title: starwarsvisionstitle, description: 'Volumen 2 ya disponible' }
    ]

    const goToPreviousSlide = () => {
        const previousSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        setCurrentSlide(previousSlide)
    }

    const goToNextSlide = () => {
        const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1
        setCurrentSlide(nextSlide)
    }

    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.carousel}>
                <div className={styles.left} onClick={goToPreviousSlide}>
                    <IoIosArrowBack className={styles.arrows} />
                </div>
                <div className={styles.right} onClick={goToNextSlide}>
                    <IoIosArrowForward className={styles.arrows} />
                </div>
                <div className={styles.imageSlider}>
                    <ImageSlider slides={slides} currentSlide={currentSlide} />
                </div>
            </div>
            <Companies />
            <h3>Star Wars: Películas y series</h3>
            <StarWars />
            <h3>Novedades en Disney+</h3>
            <Recommended index={0}/>
            <h3>Tendencias</h3>
            <Recommended index={1}/>
        </div>
    )
}

export default HomePage