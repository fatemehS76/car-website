import { Route, Routes, BrowserRouter } from "react-router-dom" 
import App from "./App"
import Login from "./Components/Login"
import Register from "./Components/Register"



function Index() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/*" element={<App/>}/>
        </Routes>
        </BrowserRouter>

    )
}

export default Index