import styles from './RecommendedCards.module.css'

const RecommendedCards = ( { img, title } ) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img src={img} alt={title} />
            </div>
        </div>
    )
}

export default RecommendedCards