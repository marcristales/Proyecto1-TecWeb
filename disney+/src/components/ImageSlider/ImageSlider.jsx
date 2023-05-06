import styles from './ImageSlider.module.css'

const ImageSlider = ({ slides, currentSlide }) => {

    return (
        <div>
            <div className={styles.imageContainer}>
                <img src={slides[currentSlide].img} alt="title" className={styles.currentSlide}/>
                <img src={slides[currentSlide].title} alt="title" className={styles.imageTitle} />
                <h4 className={styles.descripcion}>{slides[currentSlide].description}</h4>
            </div>
        </div>
    )
}

export default ImageSlider