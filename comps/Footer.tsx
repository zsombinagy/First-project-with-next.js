import Link from "next/link";
import styles from "../styles/Footer.module.sass"
import Image from "next/image"


const Footer = () => {
 return (
     <>
     <div className={styles.footer_content}>
         <h3>Pegasus</h3>
         <p>We accept no liability for any misuse!</p>
         <ul className={styles.socials}>
             <li className={styles.png__li}>
                 <div className={styles.image}>
                     <a className={styles.link}>
                         <Image src="/facebook.png" width={35} height={35} />
                     </a>
                 </div>
             </li>
             <li className={styles.png__li}>
                 <div className={styles.image}>
                     <a className={styles.link}>
                         <Image src="/google.png" width={35} height={35} />
                     </a>
                 </div>
             </li>
             <li className={styles.png__li}>
                 <div className={styles.image}>
                     <a className={styles.link}>
                         <Image src="/instagram.png" width={35} height={35} />
                     </a>
                 </div>
             </li>
             <li className={styles.png__li}>
                 <div className={styles.image}>
                     <a className={styles.link}>
                         <Image src="/linkedin.png" width={35} height={35} />
                     </a>
                 </div>
             </li>
             <li className={styles.png__li}>
                 <div className={styles.image}>
                     <a className={styles.link}>
                         <Image src="/twitter.png" width={30} height={30} />
                     </a>
                 </div>
             </li>
             <li className={styles.png__li}>
                 <div className={styles.image}>
                     <a className={styles.link}>
                         <Image src="/youtube.png" width={35} height={35} />
                     </a>
                 </div>
             </li>
             
         </ul>

     
     <footer className={styles.fotter_bottom}>
         <p>Copyright &copy;2021 zsombinagy. designed by <span>zsombinagy</span></p>

     </footer>
     </div>
     </>
 )
}

export default Footer;