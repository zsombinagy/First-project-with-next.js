import styles from "../../styles/Members.module.sass"
import Link from "next/link"
import Navbar from "../../comps/Navbar";
import Footer from "../../comps/Footer";



export const getStaticProps = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json();

  return {
    props: {members: data}
  }

}

const Members = ({members}) => {
  return(
    <>
    <Navbar />
    <div className={styles.main}>
      {members.map(member => (
        <div key={member.id} className={styles.member}>
          <Link href={'/members/' + member.id}>
            <button className={styles.btn}>
            <a className={styles.single}>
              {member.name}
            </a>
            </button>
          </Link>
        
        </div>
      ))}
    </div>
    <Footer />

    </>
  )
}

export default Members;