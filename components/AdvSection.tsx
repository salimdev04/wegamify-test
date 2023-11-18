import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { AdvantageCard } from "./CommonUI"



export default function AdvSection() {
    return (
        <section className={commonStyles.section}>
            <div className={"w-1/2"}>
                <h1 className={[commonStyles.boldText, "text-[48px]"].join(" ")}><span className=" text-[#BD1A1A]">Elevate</span> Your Marketing Journey with Our Dynamic Campaign Toolkit</h1>
                <p className={[commonStyles.lightText, "py-6"].join(" ")}>Transform your marketing initiatives with a seamless four-step process that empowers you to choose captivating templates, infuse your brand, go live effortlessly, and refine strategies for unparalleled success</p>
                <button className={styles.whiteBtn}>Contact Us</button>
            </div>
            <div>
                <AdvantageCard title="Choose Your Campaign Template" content="Tailor from a wide selection of engaging mini-games that meet your marketing goals." />
                <AdvantageCard title="Customize Your Game" content="Infuse your campaign with your unique branding elements for a personalized touch." />
                <AdvantageCard title="Go Live Across Platforms" content="Launch your branded game on various channels including social media, e-commerce sites, and more with ease." />
                <AdvantageCard toggle title="Measure and Enhance" content="Employ advanced analytics to track your campaign's success and fine-tune your strategies for maximum impact." />
            </div>
        </section>
    )
}