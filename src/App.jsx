import Main from "./Components/Main"
import Market from "./Components/Market"
import Comments from "./Components/Comments"
import Footer from "./Components/Footer"

import "./Components/styles/font.css"
import "./Components/styles/MediaQueries.css"
import { useRef } from "react"

function App () {

  let marketRef = useRef(null)
  let commentRef = useRef(null)
  

  return(
    
    <>
    <Main marketRef={marketRef} commentRef={commentRef}/>
    <Market marketRef={marketRef}/>
    <Comments commentRef={commentRef}/>
    <Footer />
    </>
  )
}
export default App