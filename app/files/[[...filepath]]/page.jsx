
// catch All-route is [...filepath] optional catch-all route is :[[...filepath]]

import React from 'react'

export const metadata={
  title:{
    absolute:"My files"
  }
}

const FilePath = async({params}) => {
    console.log(await params)
    const {filepath}=await params;
  return (
    <div>FilePath : file/{filepath?.join("/")}</div>
  )
}

export default FilePath