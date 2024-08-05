import "./styles/Login&Register.css"
import { Link } from "react-router-dom"
import { useRef, useState } from "react"

function Login () {

    let userref = useRef("")
    let passwordref = useRef("")
    let [loggedIn, setLoggedIn] = useState(false)

    function loginUser(userValue, passwordValue) {
        console.log(userValue, passwordValue);
        if (userValue && passwordValue) {
            if (userValue == localStorage.getItem("username") && passwordValue == localStorage.getItem("password")) {
                setLoggedIn(true)
            }
            else {
                setLoggedIn(false)
                alert("نام کاربری یا رمز عبور اشتباه است")
                userref.current.value = ""
                passwordref.current.value =""
            }

        }
        else {
            alert("لطفا فیلد های مربوطه را پر کنید")
            userref.current.value = ""
            passwordref.current.value =""
        }

    }


    return(
        <div className="login-form">
            <h2 className="login-title">ورود</h2>
            <input ref={userref} type="text" name="" id="user-inp" placeholder="نام و نام خانوادگی خود را وارد کنید" />
            <input ref={passwordref} type="password" name="" id="password-inp" placeholder="رمز خود را وارد کنید"/>
            <div> 
            <a className="login-link" href="http://">فراموشی رمز عبور</a>
            <Link className="login-link" to="/register">اکانت ندارید؟ ثبت نام کنید</Link>

            </div>
            <Link to={loggedIn ? "/" : "/login"}><button onClick={() => loginUser(userref.current.value, passwordref.current.value)} className="register-btn">تایید</button></Link>
        </div>
    )
}
export default Login