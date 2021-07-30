import Navbar from "../comps/Navbar"
import styles from "../styles/Home.module.sass"
import Footer from "../comps/Footer"
import Head from "next/head"


export default function Home() {
  return (


    <>
    <Head>
      <title>Pegasus | Home</title>

    </Head>


    <Navbar />
    <div className={styles.homepage}>
      <div className={styles.main}>
        <h1 className={styles.h1}>Do you want <br /> to listen <br /> in on other people's <br /> phone conversations? </h1>

      </div>
      <div className={styles.packages__div}>
        <div className={styles.first}>
          <h1>Beginner Package</h1>
          <p>1 phone and 1 laptop</p>
          <div className={styles.btn__div}>
            <button className={styles.btn}>Get Started</button>
        </div>
        </div>
        <div className={styles.second}>
          <h1>Advanced Package</h1>
          <p>3 phones and 2 laptops</p>
          <div className={styles.btn__div}>
            <button className={styles.btn}>Get Started</button>
          </div>
        </div>
        <div className={styles.third}>
          <h1>Legendary Package</h1>
          <p>Infite acces</p>
          <div className={styles.btn__div}>
            <button className={styles.btn}>Get Started</button>
          </div>
          </div>
      </div>
    </div>
    <Footer />
   
   

    </>
  )
}
