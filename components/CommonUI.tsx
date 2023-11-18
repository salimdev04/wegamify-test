import commonStyles from "./CommonStyles.module.css"



interface SimpleCardProps {
    title: string
    content: string
    toggle?: boolean
}

export const AdvantageCard = ({ title, content, toggle }: SimpleCardProps) => {
    return (
        <div className="flex gap-[40px] mb-4">
            <img src="/divider.svg" className={toggle ? 'hidden' : 'block'} alt="" />
            <img src="/Relume.svg" className={!toggle ? 'hidden' : 'block'} alt="" />
            <div>
                <h3 className={[commonStyles.boldText, 'text-xl mb-4'].join(' ')}>{title}</h3>
                <p className={[commonStyles.boldText, 'text-base'].join(' ')}>{content}</p>
            </div>
        </div>
    )
}

export const DiscoverCard = ({ title, content }: SimpleCardProps) => {
    return (
        <div>
            <h3 className={[commonStyles.boldText, 'text-[32px]'].join(' ')}>{title}</h3>
            <p className={[commonStyles.lightText, 'text-base py-4'].join(' ')}>{content}</p>
        </div>
    )
}