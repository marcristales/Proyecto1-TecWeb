import styles from './CompanyCards.module.css'

const Cards = ({ img, title, video }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img src={img} alt={title} />
                <video loop autoPlay muted playsInline className={styles.video}>
                    <source src={video} type='video/mp4' />
                </video>
            </div>
        </div>
    )
}

export default Cards