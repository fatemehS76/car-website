import { Link } from "react-router-dom"
import "./styles/Login&Register.css"

import { useRef, useState } from "react"

function Register () {

    let userref = useRef("")
    let passwordref = useRef("")

    
    function registerUser() {
        localStorage.setItem("username", userref.current.value)
        localStorage.setItem("password", passwordref.current.value)

    }


    return(
        <div className="register-form">
            <h2 className="register-titile">ثبت نام</h2>
            <input ref={userref} type="text" name="" id="user-inp" placeholder="نام و نام خانوادگی خود را وارد کنید" />
            <input ref={passwordref} type="password" name="" id="password-inp" placeholder="رمز خود را وارد کنید"/>
            <Link to="/login"><button onClick={registerUser} className="register-btn">ثبت</button></Link>
        </div>
    )
}
export default Register