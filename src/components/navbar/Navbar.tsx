import styles from "./navbar.module.css"
import { signIn } from "next-auth/react"
import Image from "next/image"
import UserMenuButton from "./signButtons/UserMenuButton"
import { getServerSession } from "next-auth"
import LanguageSwitcher from "../language/LanguageSwitcher"
import Link from "next/link"
import HamburgerButton from "./hamburgerButton/HamburgerButton"

const Navbar = async () => {
    // const session = await getServerSession(authOptions);

    return (
        <section className={styles.container}>
            <nav className={styles.nav}>
                <Link href={"/"}>
                    <Image
                        src={"/images/avalanche_academy.png"}
                        alt="avalanche_academy"
                        height={900}
                        width={900}
                        className={styles.logo}
                    />
                </Link>
                <div></div>
                <HamburgerButton />
                <div className={styles.buttons}>
                    <UserMenuButton />
                    <LanguageSwitcher />
                </div>
            </nav>
        </section>
    )
}

export default Navbar
