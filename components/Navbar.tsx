'use client'

import Link from "next/link"
import styles from "./Navbar.module.css"
import commonStyles from "./CommonStyles.module.css"
import { hiddenOnMobile } from "@/utils/styles"
import { useState } from "react";




export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const MobileNav = () => {
        return (
            <div
                className={`absolute top-0 left-0 h-screen p-[2rem] w-screen bg-[#fff] flex flex-col justify-between items-start transform ${toggleMenu ? "-translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out filter  `}
            >
                <div className=" w-full">
                    <div
                        className="flex justify-end cursor-pointer mb-[2rem]"
                        onClick={() => setToggleMenu(!toggleMenu)}
                    >
                        <img src="/close.png" width={30} alt="" />
                    </div>

                    <nav className=" flex flex-col ">
                        <Link href={"#"} className={styles.navLink}>About Us</Link>
                        <Link href={"#"} className={styles.navLink}>Services</Link>
                        <Link href={"#"} className={styles.navLink}>Contact Us</Link>
                        <Link href={"#"} className={styles.navLink}>More</Link>
                        <button className={styles.blackBtn}>Contact Us</button>
                    </nav>
                </div>

            </div>
        );
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>WeGamify</h1>
            <nav className={commonStyles.hiddenOnMobile}>
                <Link href={"#"} className={styles.navLink}>About Us</Link>
                <Link href={"#"} className={styles.navLink}>Services</Link>
                <Link href={"#"} className={styles.navLink}>Contact Us</Link>
                <Link href={"#"} className={styles.navLink}>More</Link>
                <button className={styles.blackBtn}>Contact Us</button>
            </nav>
            <div className={["cursor-pointer", commonStyles.hiddenOnDesktop].join(" ")} onClick={() => setToggleMenu(!toggleMenu)}>
                <img src="/menu.png" width={30} alt="" />
            </div>
            <MobileNav />
        </header>
    )
}

