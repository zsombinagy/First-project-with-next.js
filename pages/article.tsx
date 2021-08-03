import { useState } from "react";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Article.module.sass"




export const getStaticProps = async () => {

    const res = await fetch("/db.json/blogs")
    const data = await res.json();
  
    return {
      props: {members: data}
    }
  
  }

const Article = () => {
const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [author, setAuthor] = useState("");
const [isPending, setIsPending] = useState(false);


const handleSubmit = (e) =>{
    e.preventDefault();
    const blog = {title, body, author };

    setIsPending(true);

    fetch("/data.json", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then (() => {
        console.log("new blog added")
        setIsPending(false)
    })

}


    return (


        <>
            <Navbar />









            <div className={styles.create}>
                <h2>Add a New Blog</h2>
                <form onSubmit={handleSubmit}>
                    <label>Blog title:</label>
                    <input 
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Blog body:</label>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                   ></textarea>
                   <label >Blog author:</label>
                   <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                       <option value="mario">Mario</option>
                       <option value="yoshi">Yoshi</option>
                   </select>
                   
                   { !isPending && <button>Add blog</button>}
                   { isPending && <button disabled>Adding blog...</button>}

                </form>

            </div>
            <Footer />

        </>

    );
}

export default Article;
