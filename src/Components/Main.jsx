import "./styles/MainStyle.css"
import Header from "./Header"
import { useRef } from "react"


function Main({marketRef, commentRef}) {


    return(
        <section className="main-section">
            <Header marketRef={marketRef}  commentRef={commentRef}/>
            <div className="main-container">
            <h2 className="main-title">مرکز فروش خودرو های خارجی در ایران</h2>
            <p>خودرو ایده ال خود را از ما تهیه کنید</p>

            </div>

        </section>
    )
}
export default Main