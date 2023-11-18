import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { DiscoverCard } from "./CommonUI"
import { FaqAccordion } from "./FaqAccordion"
import { hiddenOnMobile } from "@/utils/styles"

export default function FaqSection() {
    return (
        <section className={[commonStyles.padding, "max-w-[768px] mx-auto text-center"].join(" ")} >
            <h1 className={[commonStyles.boldText, "text-4xl tablet:hidden"].join(" ")}>FAQs</h1>
            <div>
                <img src="/image-2.png" alt="" width={325} className={["mx-auto ", commonStyles.hiddenOnMobile].join(" ")} />
                <p className={[commonStyles.lightText, "py-6 text-lg"].join(" ")}>Find answers to frequently asked questions about our marketing solution and gamified experiences.</p>
            </div>
            <div className="my-24">
                <FaqAccordion />
            </div>
            <div >
                <h1 className={[commonStyles.boldText, 'text-[32px]'].join(" ")}>Still have questions?</h1>
                <p className={[commonStyles.lightText, ' text-[16px] mt-4 mb-6'].join(" ")}>Contact us for more information or assistance.</p>
                <button className={commonStyles.blackBtn}>Contact US</button>
            </div>

        </section>
    )
}
