import Footer from "../comps/Footer"
import Navbar from "../comps/Navbar"
import styles from "../styles/About.module.sass"



const About = () => {
    return (
        <>
        <Navbar />

        <div className={styles.about}>
            <div className={styles.h1}>
                <h1>About</h1>
            </div>
            <div className={styles.text}>
                <p>Pegasus is a surveillance software or a spyware which is used to infiltrate mobile devices and then snoop on device owners by transferring data without knowledge or permission of the owner. The malware can be used on both Android and iOS devices but it has majorly been found to be present on iOS devices. 
                    Its flagship product is Pegasus, spying software – or spyware – that targets iPhones and Android devices. Once a phone is infected, a Pegasus operator can secretly extract chats, photos, emails and location data, or activate microphones and cameras without a user knowing.</p>
            </div>
        </div>
        <Footer />

        
        </>
    )
}


export default About;