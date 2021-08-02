import Link from "next/link";
import styles from "../styles/Footer.module.sass"
import Image from "next/image"


const Footer = () => {
 return (
     <>
     <div className={styles.footer_content}>

         <div className={styles.content}>
         <h3>Pegasus</h3>
         <p>We accept no liability for any misuse!</p>
        </div>

     
     <footer className={styles.footer_bottom}>
         <p>Copyright &copy;2021 zsombinagy. designed by <span>zsombinagy</span></p>

     </footer>
     </div>
     </>
 )
}

export default Footer;