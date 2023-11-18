import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { DiscoverCard } from "./CommonUI"

export default function DiscoverSection() {
    return (
        <section className={commonStyles.padding} >
            <div className={["flex justify-between pb-8"].join(' ')}>
                <div className=" w-1/2" >
                    <h1 className={[commonStyles.boldText, " text-[48px]"].join(" ")}> <span className=" text-[#BD1A1A]">Discover</span> the Power of Gamified Experiences for User Acquisition and Retention</h1>
                    <p className={[commonStyles.lightText, "py-6 w-[380px]"].join(" ")}>Our marketing solution creates simple and engaging gamified experiences that help you acquire and retain users. With our innovative integrations, you can easily boost user engagement and drive growth for your business.</p>

                </div>
                <div className="mx-auto">
                    <img src="/image-4.png" alt="" width={450} height={409} />
                </div>
            </div>
            <div className={["flex justify-between gap-6"].join(' ')}>
                <DiscoverCard title="Play Driven Engagement" content=" Engage users like never before with interactive, game-like experiences. Play driven marketing that entertains while it sells will help you achieve up to a 4X increase in click through rates." />
                <DiscoverCard title="Turn Fun into Revenue" content="Transform prospects into players—and players into purchasers. Gamified campaigns have been shown to double conversion rates, turning interest into action with playful incentives and rewards." />
                <DiscoverCard title="Insights from Play" content="Every interaction tells a story. Dive into deep analytics of your campaign, uncovering user preferences and behaviors. Leverage this data to refine strategies and target with precision, enhancing ROI." />
            </div>
        </section>
    )
}
