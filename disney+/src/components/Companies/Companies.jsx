import styles from './Companies.module.css'
import disney from '@/assets/images/disneycard.png'
import pixar from '@/assets/images/pixarcard.png'
import marvel from '@/assets/images/marvelcard.png'
import starwars from '@/assets/images/starwarscard.png'
import natgeo from '@/assets/images/natgeocard.png'
import CompanyCards from './../CompanyCards/CompanyCards'

const Companies = () => {

    const cards = [
        { img: disney, title: 'Disney', video: 'https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-disney.mp4' },
        { img: pixar, title: 'Pixar', video: 'https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676714-pixar.mp4' },
        { img: marvel, title: 'Marvel', video: 'https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676115-marvel.mp4' },
        { img: starwars, title: 'Star Wars', video: 'https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229455-star-wars.mp4' },
        { img: natgeo, title: 'National Geographic', video: 'https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676296-national-geographic.mp4' }
    ]

    return (
        <div className={styles.viewers}>
            {cards.map((item) => (
                <CompanyCards img={item.img} title={item.title} video={item.video} />
            ))}
        </div>
    )
}

export default Companies