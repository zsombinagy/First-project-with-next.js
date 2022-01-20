import Footer from "../../comps/Footer";
import Navbar from "../../comps/Navbar";
import styles from "../../styles/Details.module.sass"




export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(member => {
      return {
        params: { id: member.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { member: data }
    }
  }
  
  const Details = ({ member }) => {
    return (
      <>
        

          <div className={styles.data}>
            <div className={styles.h1}>
              <h1>{member.name}</h1>
            </div>
              <div className={styles.text}>
              <h2 className={styles.h2}>{member.username}</h2>
              <p className={styles.email}>{member.email}</p>
              <p className={styles.address}> <span className={styles.title}>{member.address.city}</span> {member.address.street} street</p>
            </div>



          </div>




        

      </>

    );
  }
  
  export default Details;