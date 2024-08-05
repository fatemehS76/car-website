import "./styles/CarStyle.css"

function Car() {
    return (
        <div className="car-container">
            <img src=".../photo/pic-2.jpg" alt="car image" />
            <div className="car-info">
            <span>نام خودرو</span>
            <span>قیمت خودرو</span>
            </div>
        </div>

    )
}
export default Car