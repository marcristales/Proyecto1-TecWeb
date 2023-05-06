import styles from './StarWars.module.css'
import mando from '@/assets/images/mandalorianbig.jpeg'
import boba from '@/assets/images/bobafettbig.jpeg'
import obi from '@/assets/images/obiwanbig.jpeg'
import visions from '@/assets/images/visionsbig.jpeg'
import badbatch from '@/assets/images/badbatchbig.jpeg'
import BigCards from './../BigCards/BigCards'

const Recommended = () => {
    const bigcards = [
        { img: mando, title: 'Mando' },
        { img: boba, title: 'Boba Fett' },
        { img: obi, title: 'Obi Wan' },
        { img: visions, title: 'Visions' },
        { img: badbatch, title: 'Bad Batch' }
    ]

    return (
        <div className={styles.viewers}>
            {bigcards.map((item) => (
                <BigCards img={item.img} title={item.title} />
            ))}
        </div>
    )
}

export default Recommended