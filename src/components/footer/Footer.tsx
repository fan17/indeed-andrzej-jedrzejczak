import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.social}>
                    <div className={styles.github}>GH</div>
                    <div className={styles.linkedin}>IN</div>
                    <div className={styles.codewars}>CW</div>
                </div>
                <div className={styles.companyData}>
                    <div>Indeed Andrzej Jędrzejczak</div>
                    <div>NIP: 6182085990</div>
                    <div>Regon: </div>
                    <div className={styles.email}>jedrzejczak.andrzej89@gmail.com</div>
                    <div className={styles.phone}>+ 48 517 253 170</div>
                </div>
            </div>
        </footer>
    )
}
