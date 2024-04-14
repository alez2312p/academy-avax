import Image from "next/image"
import React from "react"
import Title from "./title"
import styles from "@/styles/card.module.css"

type CardProps = {
    src: string
    count: string
    title: string
}

const Card: React.FC<CardProps> = ({ src, count, title }) => {
    return (
        <div className={styles.container}>
            <Image
                className={styles.image}
                src={src}
                alt={src}
                width={100}
                height={100}
            />
            {count}
            <Title title={title} fontSize={24} />
        </div>
    )
}
export default Card;