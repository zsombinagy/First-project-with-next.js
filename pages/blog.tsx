import { useState } from "react";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import Arweave from "arweave";
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
    const [articles, setArticles] = useState<{ title: string, body: string, author: string}[]>([])


    const handleSubmit = async (e: MouseEvent) =>{
        e.preventDefault();
        
        setIsPending(true);

        const client = new Arweave({
            host: "arweave.net",
            port: 443,
            protocol: "https",
        });

        const transaction = await client.createTransaction({
            data: body,
        });

        transaction.addTag("Content-Type", "text/plain");
        transaction.addTag("App-Name", "Zsomblog");
        transaction.addTag("Blog-Name", title);
        transaction.addTag("Blog-Author", author);

        await client.transactions.sign(transaction);




        setIsPending(false);
        setBody("");
        setAuthor("");
        setTitle("");
        

        
    }  


    return (
        <>
            
            <div className={styles.create}>
                <div className={styles.blogs}>
                    {articles.map(blog =>(
                        <div  className={styles.blog}>
                            <h1>{blog.title}</h1>
                            <h3>{blog.author}</h3>
                            <p>{blog.body}</p>
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
            

        </>

    );
}

export default Article;