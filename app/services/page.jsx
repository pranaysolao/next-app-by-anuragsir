import Link from 'next/link';
import React from 'react'

const Contact = () => {
  return (
    <div> 
      <h1>ALL services</h1>

        <br></br>
        <Link href="../services/web-developement">Web-dev</Link>
        <br></br>
        <Link href="../services/seo">Seo Dev</Link>

        <br />

        <Link className='bg-amber-400' href="../about">About</Link>
        <br></br>
        <Link href="/">Home</Link>
    </div>
  )
}

export default Contact;