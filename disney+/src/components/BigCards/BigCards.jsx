import styles from './BigCards.module.css'

const BigCards = ( { img, title } ) => {
    return (
        <div className={styles.bigcardContainer}>
            <div className={styles.bigcard}>
                <img src={img} alt={title} />
            </div>
        </div>
    )
}

export default BigCards