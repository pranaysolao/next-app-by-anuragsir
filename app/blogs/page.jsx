import React from 'react'

export const metadata={
  title:"Blog"
}

const BlogPage = async({params}) => {
    console.log(await params)
  return (
    <div>
        <h2>ALL blog</h2>
        <p>Blog 1</p>
      

    </div>
  )
}

export default BlogPage