import Navbar from "../comps/Navbar"
import styles from "../styles/Home.module.sass"


export default function Home() {
  return (
    <>
    <Navbar />
    <div>
      <h1 className={styles.h1}>HomePage</h1>
    </div>

    </>
  )
}
