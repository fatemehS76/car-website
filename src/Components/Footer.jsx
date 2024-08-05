import "./styles/FooterStyle.css"
import { FaInstagram , FaFacebook, FaTwitter, FaTelegram} from "react-icons/fa";

function Footer() {
    return(
        <footer>
            <h5 className="footer-title">تمامی حقوق مادی و معنوی برای سایت محفوظ است</h5>
            <p>راه های ارتباط با ما</p>
            <div className="icons">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
                <FaTelegram />
            </div>

        </footer>
    )
}
export default Footer