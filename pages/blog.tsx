import { useState } from "react";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import { ListTemplate } from "../src/ListTemplate";
import styles from "../styles/Article.module.sass";

/* class Blogs {
    constructor (
        public title: string,
        public body: string,
        public author: string
        ){}

    format() {
        return ` This Book${this.title} writted by ${this.author}, about ${this.body}`
    }
}

let blog: Blogs[] = [];
interface HasFormatter {
    format(): string
} */





const Article = () => {
/* const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [author, setAuthor] = useState("");
const [isPending, setIsPending] = useState(false);

const ul = document.querySelector("ul")!;

const list = new ListTemplate("ul");
let doc: HasFormatter

function rendering () {
    doc = new Blogs(title, body, author)
} */
/* 


const handleSubmit = (e) =>{
    e.preventDefault();
    const blog = {title, body, author };

    setIsPending(true);

    console.log(render)
}
     */



        



    return (


        <>
            <Navbar />









            <div className={styles.create}>
                <ul>

                </ul>

                <h2>Add a New Blog</h2>
                <form /* onSubmit={handleSubmit} */>
                    <label>Blog title:</label>
                    <input 
                        type="text"
                        required
/*                         value={title}
                        onChange={(e) => setTitle(e.target.value)} */
                    />
                    <label>Blog body:</label>
                    <textarea
                        required
/*                         value={body}
                        onChange={(e) => setBody(e.target.value)} */
                   ></textarea>
                   <label >Blog author:</label>
                   <select
        /*                 value={author}
                        onChange={(e) => setAuthor(e.target.value)} */
                    >
                       <option value="mario">Mario</option>
                       <option value="yoshi">Yoshi</option>
                   </select>
                   
{/*                    { !isPending && <button>Add blog</button>}
                   { isPending && <button disabled>Adding blog...</button>} */}

                </form>

            </div>
            <Footer />

        </>

    );
}

export default Article;