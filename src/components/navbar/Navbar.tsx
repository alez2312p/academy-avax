import styles from "./navbar.module.css"
import { signIn } from "next-auth/react"
import Image from "next/image"
import UserMenuButton from "./signButtons/UserMenuButton"
import { getServerSession } from "next-auth"
import ToggleTheme from "../toggleTheme/ToggleTheme"

const Navbar = async () => {
    // const session = await getServerSession(authOptions);
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <Image
                    src={"/images/avalanche_academy.png"}
                    alt="avalanche_academy"
                    height={900}
                    width={900}
                    className={styles.logo}
                />
                <div></div>
                <div className={styles.buttons}>
                    <UserMenuButton />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
