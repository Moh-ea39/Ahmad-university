import img4 from './img4.png'
export default function SecondComponent() {
    return (
        <div className="parent_second">
            <img src={img4} className="img4" />
            <div className="boxs">
                <div className="green_background" />
                <div className="flex_red_balck">
                    <div className="red_background" />
                    <div className="black_background" />
                </div>
                <div className="yellow_background" />
            </div>
        </div>
    )
}