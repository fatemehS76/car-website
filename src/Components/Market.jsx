import Car from "./Car"
import "./styles/MarketStyle.css"

// import { useRef } from "react"

function Market({marketRef}) {

    return (
        <section ref={marketRef} className="market-section" >
            <h3 className="market-title">تازه ترین ها برای فروش</h3>
            <div className="market-container">
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />

            </div>
            <a className="market-link" href="http://">دیدن موارد بیشتر</a>

        </section>
    )
}
export default Market