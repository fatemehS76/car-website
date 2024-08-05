import "./styles/HeaderStyle.css"
import { FaList } from "react-icons/fa6"
import { CgCloseR } from "react-icons/cg"
import { FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useRef } from "react"


function Header({marketRef, commentRef}) {

    let headerBtn = useRef(null)
    let headerList = useRef(null)


    function marketClick(ref,btnref, listref) {
        scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: "smooth"
            
        })
        btnref.style.display = window.innerWidth < 767 ? "block" : "none"
        listref.classList.replace("list", "header-list")
    }
    function commentClick(ref,btnref, listref) {
        scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: "smooth"
        })
        btnref.style.display = window.innerWidth < 767 ? "block" : "none"
        listref.classList.replace("list", "header-list")
    }
    
    function handleMenu(btnref, listref) {
        listref.classList.replace("header-list","list")
        btnref.style.display = "none"
    }

    function closeMenu (btnref, listref) {
        btnref.style.display = "block"
        listref.classList.replace("list", "header-list")
    }


    return(
        <header>
            <h1 className="header-title">ماشین مارکت </h1>
            <button onClick={() => handleMenu(headerBtn.current, headerList.current)} ref={headerBtn} className="header-btn"><FaList/></button>
            <ul ref={headerList} className="header-list">
                {
                    window.innerWidth < 767 ? 
                        <button onClick={() => closeMenu(headerBtn.current, headerList.current)}><CgCloseR/>
                        </button>
                        : null
                }
                {
                    (localStorage.getItem("username") && localStorage.getItem("password")) ? 
                    (<li className="header-list-item">{localStorage.getItem("username")}<FaUserCircle className="user-icon"/></li>)
                    : (<li className="header-list-item"><Link to="/login">ورود / ثبت نام</Link></li>)
                 
                }
                <li onClick={() => marketClick(marketRef.current, headerBtn.current, headerList.current)} className="header-list-item"><Link>مارکت</Link></li>
                <li onClick={() => commentClick(commentRef.current, headerBtn.current, headerList.current)} className="header-list-item"><Link>نظرات</Link></li>
                <li className="header-list-item"><Link to="*">ارتباط با ما</Link></li>
                {/* <CgCloseR/> */}
                    
            </ul>
        </header>
    )
}
export default Header