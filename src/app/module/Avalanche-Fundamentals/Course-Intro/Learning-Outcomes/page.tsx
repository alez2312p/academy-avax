"use client"
import PageContent from "@/components/pageContent/PageContent"
import styles from "./styles.module.css"
import Navigation from "@/components/navigation/Navigation"
const LearningOutcomes = () => {
    return (
        <PageContent>
            <div className={styles.main} >
                <article>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit in doloribus dolorem modi optio!</p>
                    <Navigation />
                </article>
            </div>

        </PageContent>
    )
}

export default LearningOutcomes
