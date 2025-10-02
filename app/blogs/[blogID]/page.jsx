

// call as Slug
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({params}) {
    const {blogID}=await params;
    console.log(await params)
  return{
    title: `Blog ${blogID}`
  }
  
}

const page = async({params}) => {

    console.log(await params)
    const {blogID}=await params;

    // if(isNaN(blogID)){
    //   notFound();
    // }
    // orr

    if(!/^\d+$/.test(blogID)){
      notFound()
    }

  return (
    <div>Blog---{blogID}</div>
  )
}

export default page