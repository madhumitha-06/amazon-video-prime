import { faBasketShopping, faCameraRetro, faFilm, faPlus } from '@fortawesome/free-solid-svg-icons'
import myimages7 from './assets/images/prime1.png'
import './Style/Tv1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Tv3(props:any){
    return(
        <>
         <div className="cardcontainer">
      <div className="movieCard">
        <img src={props.parent2.poster} alt="" className="movieposter"/>
        <FontAwesomeIcon className="icon2" style={{ color: "rgba(237,208,42,1)" }} icon={faBasketShopping}/>
        <img className="img" src={myimages7} alt=""/>
      </div>
      <div className="moviecard1">
        <img src={props.parent2.poster} className="hoverPoster"/>
        <p className="title">{props.parent2.title}</p>
        <p className="id">{props.parent2.id}</p>
        <div className="whole">
          <p className="ic2"><FontAwesomeIcon icon={faFilm}/></p>
          <p className="ic2"><FontAwesomeIcon icon={faPlus}/></p>
        </div>
        <p className="icon3">
          <FontAwesomeIcon style={{ color: "rgba(238, 210, 52, 1)" }} icon={faBasketShopping}/>   Watch with a Prime membership
        </p>
        <p className="release">
          {props.parent2.year}
          <span className="time">{props.parent2.time}</span>
        </p>
        <div className="whole1">
          <p className="age">{props.parent2.age}</p>
          <p className="age1"><FontAwesomeIcon icon={faCameraRetro}/></p>
        </div>
        <p className="description">{props.parent2.description}</p>
      </div>
    </div>
        </>
    )
}
export default Tv3