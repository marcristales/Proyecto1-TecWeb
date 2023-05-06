import styles from './Recommended.module.css'
import centrorec from '@/assets/images/centrorec.jpeg'
import jovenesjedirec from '@/assets/images/jovenesjedirec.jpeg'
import legendsrec from '@/assets/images/legendsrec.jpeg'
import maggieroguerec from '@/assets/images/maggieroguerec.jpeg'
import peterpanrec from '@/assets/images/peterpanrec.jpeg'
import cocorec from '@/assets/images/cocorec.jpeg'
import endgamerec from '@/assets/images/endgamerec.jpeg'
import simpsonrec from '@/assets/images/simpsonrec.jpeg'
import ratrec from '@/assets/images/ratrec.jpeg'
import carsrec from '@/assets/images/carsrec.jpeg'
import RecommendedCards from '../RecommendedCards/RecommendedCards'


const Recommended = ( { index } ) => {
    const rec0 = [
        { img: centrorec, title: 'Viaje Al Centro de la Tierra' },
        { img: jovenesjedirec, title: 'Jovenes Jedi' },
        { img: legendsrec, title: 'Marvel Legends' },
        { img: maggieroguerec, title: 'Maggie Rogue' },
        { img: peterpanrec, title: 'Peter Pan' }
    ]

    const rec1 = [
        { img: cocorec, title: 'Coco' },
        { img: endgamerec, title: 'EndGame' },
        { img: simpsonrec, title: 'Simpson' },
        { img: ratrec, title: 'Ratatouille' },
        { img: carsrec, title: 'Cars' }
    ]

    const cards = index === 0 ? rec0 : rec1

    return (
        <div className={styles.viewers}>
            {cards.map((item) => (
                <RecommendedCards img={item.img} title={item.title} />
            ))}
        </div>
    )
}

export default Recommended