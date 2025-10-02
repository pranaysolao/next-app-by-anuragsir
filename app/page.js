import Image from "next/image";
import Link from "next/link";

export default async function Home({ params,searchParams}) {
  console.log(await searchParams)
  
  return (
        <div>
          <h1>Welcome to homepage</h1>
          <Link className="text-blue-700" href="./about">About</Link>
          <br></br>
          <Link className="text-blue-700" href="./services">services</Link>
          <br></br>
           <Link className="text-blue-900" href="./blogs">Blog/Slug</Link>
           <br></br>
          <Link className="text-blue-700" href="./files">File</Link>
          

        </div>
  );
}
