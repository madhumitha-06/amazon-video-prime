import { faBasketShopping, faCameraRetro, faFilm, faPlus } from '@fortawesome/free-solid-svg-icons'
import myimages7 from './assets/images/prime1.png'
import './Style/Tv1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Tv2(props:any){
    return(
        <>
          <div className="cardcontainer">
      <div className="movieCard">
        <img src={props.parent1.poster} alt="" className="movieposter"/>
        <FontAwesomeIcon className="icon2" style={{ color: "rgba(237,208,42,1)" }} icon={faBasketShopping}/>
        <img className="img" src={myimages7} alt=""/>
      </div>
      <div className="moviecard1">
        <img src={props.parent1.poster} className="hoverPoster"/>
        <p className="title">{props.parent1.title}</p>
        <p className="id">{props.parent1.id}</p>
        <div className="whole">
          <p className="ic2"><FontAwesomeIcon icon={faFilm}/></p>
          <p className="ic2"><FontAwesomeIcon icon={faPlus}/></p>
        </div>
        <p className="icon3">
          <FontAwesomeIcon style={{ color: "rgba(238, 210, 52, 1)" }} icon={faBasketShopping}/> Watch with a Prime membership
        </p>
        <p className="release">
          {props.parent1.year}
          <span className="time">{props.parent1.time}</span>
        </p>
        <div className="whole1">
          <p className="age">{props.parent1.age}</p>
          <p className="age1"><FontAwesomeIcon icon={faCameraRetro}/></p>
        </div>
        <p className="description">{props.parent1.description}</p>
      </div>
    </div>
        </>
    )
}
export default Tv2