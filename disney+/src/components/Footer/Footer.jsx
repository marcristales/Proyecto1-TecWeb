import styles from './Footer.module.css'
import logo from '@/assets/images/disneyplus.svg'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} className={styles.logo} />
            </div>
            <div className={styles.links}>
                <div className={styles.link}>
                    <span>Política de privacidad</span>
                    <span>Acuerdo de suscripción</span>
                    <span>Privacidad en California</span>
                </div>
                <div className={styles.link}>
                    <span>No vender información personal</span>
                    <span>Ayuda</span>
                    <span>Dispositivos compatibles</span>
                </div>
                <div className={styles.link}>
                    <span>Acerca de Disney+</span>
                    <span>Publicidad personalizada</span>
                </div>
            </div>
            <div className={styles.legal}>
                <div className={styles.text}>
                    El servicio Disney+ es comercializado por Disney DTC LATAM, Inc., 2400 W Alameda Ave., Burbank CA 91521 y Tax ID 75-3016153.
                </div>
            </div>
            <div className={styles.legal}>
                <div className={styles.text}>
                    © Disney. Todos los derechos reservados.
                </div>
            </div>
        </div>
    )
}

export default Footer