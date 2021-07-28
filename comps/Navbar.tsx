import Link from "next/link"
import Image from "next/image"


const Navbar = () => {
    return (
        <nav>
            <div>
                <div>
                    <Image src="/logo.png" width={110} height={77}/>
                </div>

                <Link href="/"><a >Home</a></Link>
                <Link href="/about"><a >About</a></Link>
                <Link href="/article"><a >Article</a></Link>
                <Link href="/members"><a >Members</a></Link>
            
            </div>
        
        
        
        </nav>
    )
}

export default Navbar;