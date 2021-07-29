import Link from "next/link";
import styles from "../styles/Footer.module.sass"


const Footer = () => {
 return (
     <div className={styles.footer_content}>
         <h3>Pegasus</h3>
         <p>We accept no liability for any misuse!</p>
         <ul className={styles.socials}>
             <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
         </ul>

     </div>
 )
}

export default Footer;