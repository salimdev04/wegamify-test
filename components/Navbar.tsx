import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>WeGamify</h1>
            <nav>
                <Link href={"#"} className={styles.navLink}>About Us</Link>
                <Link href={"#"} className={styles.navLink}>Services</Link>
                <Link href={"#"} className={styles.navLink}>Contact Us</Link>
                <Link href={"#"} className={styles.navLink}>More</Link>
                <button className={styles.blackBtn}>Contact Us</button>
            </nav>
        </header>
    )
}

