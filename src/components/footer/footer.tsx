import Image from "next/image";
import styles from "@/styles/footer.module.css"
import Link from "next/link";
import SocialLink from "../SocialLink/SocialLink";

const Footer = () => {
    return (
        <section className={styles.container}>
            <footer className={styles.footer}>
                <div className={styles.logo}>
                    <Image
                        src={"/images/avalanche_academy_white.png"}
                        alt="avalanche_academy_white"
                        height={60}
                        width={200}
                        className={styles.image}
                    />
                    <span className={styles.span}>
                        Copyright © 2023
                    </span>
                </div>
                <div className={styles.content}>
                    <div className={styles.legal}>
                        <p className={styles.title}>
                            Legal
                        </p>
                        <div className={styles.containerLegal}>
                            <Link className={styles.link} href={"https://www.avax.network/privacy-policy"}>Privacy Policy</Link>
                            <Link className={styles.link} href={"https://www.avax.network/terms-of-use"}>Terms of Use</Link>
                            <Link className={styles.link} href={"https://academy.avax.network/cookies"}>Cookie Policy</Link>
                        </div>
                    </div>
                    <div className={styles.social}>
                        <p className={styles.title}>
                            Social
                        </p>
                        <div className={styles.containerSocial}>
                            <SocialLink
                                iconName="facebook"
                                networkName="facebook"
                                profileUrl="https://www.facebook.com/avalancheavax"
                                username="@avalancheavax"
                            />
                            <SocialLink
                                iconName="twitter"
                                networkName="twitter"
                                profileUrl="https://twitter.com/AvaxDevelopers"
                                username="@AvaxDevelopers"
                            />
                            <SocialLink
                                iconName="youtube"
                                networkName="youtube"
                                profileUrl="https://www.youtube.com/Avalancheavax"
                                username="@Avalancheavax"
                            />
                            <SocialLink
                                iconName="linkedin"
                                networkName="linkedin"
                                profileUrl="https://www.linkedin.com/company/avalancheavax/"
                                username="@avalancheavax"
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer;