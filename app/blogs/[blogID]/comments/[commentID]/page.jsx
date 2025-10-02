import React from 'react'

const page = async({params}) => {
    console.log(await params)
      const {blogID,commentID}=await params;
      
      console.log(blogID)
      console.log(commentID)
  return (
    <div>All comment on :{blogID} and comments is -{commentID}</div>
  )
}

export default page