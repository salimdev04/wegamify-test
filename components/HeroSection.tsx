import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"

export default function HeroSection() {
    return (
        <section className={[commonStyles.section, 'mt-4'].join(' ')}>
            <img src="/image-1.png" alt="" width="50%" height={640} />
            <div className={styles.heroTextContainer}>
                <h1 className={[commonStyles.boldText, "text-[56px]"].join(" ")}><span className=" text-[#BD1A1A]">Maximize</span>  User Engagement with Gamification Marketing Solutions</h1>
                <p className={[commonStyles.lightText, "py-6"].join(" ")}>Craft Immersive Gamified Campaigns in Minutes. Harness Data-Driven Insights. Boost Engagement and Conversion Rates Effortlessly!”</p>
                <button className={styles.whiteBtn}>Contact Us</button>
            </div>
        </section>
    )
}
