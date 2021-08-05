import { useState } from "react";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import { ListTemplate } from "../src/ListTemplate";
import styles from "../styles/Article.module.sass";

class Blogs {
    constructor(
        private title: string,
        private body: string,
        private author: string
    ) {}
}

let blog: Blogs[] = []


const Article = () => {
const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [author, setAuthor] = useState("");
const [isPending, setIsPending] = useState(false);
const [articles, setArticles] = useState([])
const blogs = {title, body, author };


const handleSubmit = (e) =>{
    e.preventDefault();
    
    setIsPending(true);

    setArticles((val) => {
        val.push(blogs)
        setIsPending(false)
        return val
        

    })
    
}  

    return (
        <>
            <Navbar />
            <div className={styles.create}>
                <div className={styles.blogs}>
                    {articles.map(blog =>(
                        <div  className={styles.blog}>
                            <h1>{blogs.title}</h1>
                            <h3>{blogs.author}</h3>
                            <p>{blogs.body}</p>
                        </div>
                    ))}
                </div>
                <h2>Add a New Blog</h2>
                <form onSubmit={handleSubmit}>
                    <label>Blog title:</label>
                    <input 
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Please write a title..."
                    />
                    <label>Blog body:</label>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Please write a body..."
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