import styles from './Header.module.css'
import logo from '@/assets/images/disneyplus.svg'
import pfp from '@/assets/images/userPFP.png'
import { useEffect, useState } from 'react'
import {
    HiHome,
    HiSearch,
    HiPlus,
    HiStar
} from 'react-icons/hi'
import { RiMovie2Fill, RiTvFill } from 'react-icons/ri'
import HeaderItem from './../HeaderItem/HeaderItem'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    const menu =
        [
            {
                name: 'INICIO',
                icon: HiHome
            },
            {
                name: 'BÚSQUEDA',
                icon: HiSearch
            },
            {
                name: 'MI LISTA',
                icon: HiPlus
            },
            {
                name: 'ORIGINALES',
                icon: HiStar
            },
            {
                name: 'PELÍCULAS',
                icon: RiMovie2Fill
            },
            {
                name: 'SERIES',
                icon: RiTvFill
            }
        ]

    return (
        <div className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}>
            <img src={logo} className={styles.logo} />
            <div className={styles.menu}>
                {menu.map((item) => (
                    <HeaderItem name={item.name} Icon={item.icon} />
                ))}
            </div>
            <div className={styles.user}>
                <p className={styles.username}>Mario</p>
                <img src={pfp} className={styles.pfp} />
            </div>
        </div>
    )

}

export default Header