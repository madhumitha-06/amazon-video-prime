import { faBasketShopping, faPlus } from '@fortawesome/free-solid-svg-icons'
import './Style/Tv1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Livetv(props: any) {
    return (
        <>
            <div style={{marginLeft:'50px'}} className="cardcontainer cardcontainer1">
                <div className="movieCard">
                    <button className='up'>Upcoming</button>
                    <img src={props.parent.poster} alt="" className="movieposter" />
                </div>
                <div className="moviecard1 hovermatch">
                    <img src={props.parent.poster} className="hoverPoster" />
                    <p style={{fontSize:'20px'}} className="title">{props.parent.title}</p>
                    <p className="id id1">{props.parent.id}</p>
                    <p className="icon3 sub">
                        <FontAwesomeIcon style={{ color: "rgba(139, 124, 41, 1)",fontSize:"medium" }} icon={faBasketShopping} />   Subscribe to FanCode for ₹899/year
                    </p>
                    <div className="whole ice2">
                        <p className="ic2"><FontAwesomeIcon icon={faPlus} /></p>
                    </div>
                    <div className="whole1 ice3">
                        <button className="age age1">ALL</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Livetv