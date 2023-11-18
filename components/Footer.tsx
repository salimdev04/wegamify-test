import Link from "next/link"
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.header}>
                <img src="/logo-footer.svg" alt="" />
                <nav className={styles.footerLink}>
                    <Link href={"#"} >About Us</Link>
                    <Link href={"#"} >Services</Link>
                    <Link href={"#"} >Contact Us</Link>
                    <Link href={"#"} >More</Link>
                </nav>
                <div className="flex gap-[12px]">
                    <Link href={"#"}> <img src="/icon/Facebook.svg" alt="" /> </Link>
                    <Link href={"#"}> <img src="/icon/Instagram.svg" alt="" /> </Link>
                    <Link href={"#"}> <img src="/icon/LinkedIn.svg" alt="" /> </Link>
                    <Link href={"#"}> <img src="/icon/X.svg" alt="" /> </Link>
                    <Link href={"#"}> <img src="/icon/Youtube.svg" alt="" /> </Link>
                </div>
            </div>
            <div className={styles.policyContainer}>

                <p>© 2023 Relume. All rights reserved.</p>
                <Link className=" underline" href={"#"}>Privacy Policy</Link>
                <Link className=" underline" href={"#"}>Terms of Service</Link>
                <Link className=" underline" href={"#"}>Cookies Settings</Link>

            </div>
        </footer>
    )
}

