import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { hiddenOnMobile } from "@/utils/styles"

export default function HeroSection() {
    return (
        <section className={[commonStyles.section].join(' ')}>

            <img src="/image-1.svg" alt="" className={hiddenOnMobile} />

            <div className={'my-auto'}>
                <h1 className={[commonStyles.boldText, "text-4xl tablet:text-6xl"].join(" ")}><span className={commonStyles.colorText}>Maximize</span>  User Engagement with Gamification Marketing Solutions</h1>
                <p className={[commonStyles.lightText, "py-6 text-lg", hiddenOnMobile].join(" ")}>Craft Immersive Gamified Campaigns in Minutes. Harness Data-Driven Insights. Boost Engagement and Conversion Rates Effortlessly!”</p>
                <button className={styles.whiteBtn}>Contact Us</button>
            </div>
        </section>
    )
}
