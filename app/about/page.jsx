import Link from "next/link";

export const metadata={
    title:"about"
}

export default function About(){
    return(
        <div>About page
            <br></br>
           <Link href="/">Home</Link>
        </div>
       
    )
}