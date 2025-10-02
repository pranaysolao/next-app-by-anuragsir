
export const metadata={
  title:{
    template:"%s | Technical Agency",
    default:"Technical Agency"
  },
  description:"?Hello world"
  }


export default function RootLayout({ children }) {

  return(
    <html lang="en">
      {/* <title>Home</title>  // but it wrong next.js not recomended */}
      <body>
        <header style={{background:"green"}}>header</header>
        {children}
        <footer style={{background:"red"}}>Footer</footer>
      </body>
    </html>
  );
}
