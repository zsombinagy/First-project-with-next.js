import Link from "next/link"
import { useState } from "react"
import styles from "../styles/Navbar.module.sass"



const Navbar = () => {
    const [open, setOpen] = useState("")
    const [active, setActive] = useState("")
 



    return (
        <nav >
            <div className={styles.navbar}>
                <div className={styles.navbar__container}>

                    <div className={styles.title}>
                        <Link href="/"><a>Pegasus</a></Link>
                    </div>
                    <div className={styles.menu + " " + active} onClick={ () => {

                        if(!active ) {
                        setOpen(styles.open)
                        setActive(styles.active)
                    } else {
                        setOpen("")
                        setActive("")
                    }
                    }}>
                    <span className={styles.bar1 + " " + styles.bar}></span>
                    <span className={styles.bar2 + " " + styles.bar}></span>
                    <span className={styles.bar3 + " " + styles.bar}></span>
                    </div>
                    <div className={styles.links__container + " " + open}>

                        <ul>
                            <li><Link  href="/"><a className={styles.link} id={styles.home}>Home</a></Link></li>
                            <li><Link  href="/about"><a className={styles.link}>About</a></Link></li>
                            <li><Link  href="/blog"><a className={styles.link}>Blog</a></Link></li>
                            <li><Link  href="/members"><a className={styles.link}>Members</a></Link></li>
                        
                        </ul>
                    </div>
                </div>
        
            </div>
        
        </nav>
    )
}

export default Navbar;