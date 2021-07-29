import Link from "next/link"

import styles from "../styles/Navbar.module.sass"


const Navbar = () => {
    return (
        <nav >
            <div className={styles.navbar}>
                <div className={styles.navbar__container}>

                    <div className={styles.title}>
                        <Link href="/"><a>Pegasus</a></Link>
                    </div>
                    <div className={styles.menu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    </div>
                    <div className={styles.links__container}>

                        <ul>
                            <li><Link  href="/"><a className={styles.link} id={styles.home}>Home</a></Link></li>
                            <li><Link  href="/about"><a className={styles.link}>About</a></Link></li>
                            <li><Link  href="/article"><a className={styles.link}>Article</a></Link></li>
                            <li><Link  href="/members"><a className={styles.link}>Members</a></Link></li>
                        
                        </ul>
                    </div>
                </div>
        
            </div>
        
        </nav>
    )
}

export default Navbar;