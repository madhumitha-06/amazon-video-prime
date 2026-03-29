import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import myimages1 from './assets/images/tv1.jpeg'
import myimages2 from './assets/images/tv2.jpeg'
import myimages3 from './assets/images/tv3.jpeg'
import myimages4 from './assets/images/tv4.jpeg'
import myimages5 from './assets/images/tv5.jpeg'
import myimages6 from './assets/images/tv6.jpeg'
import './Style/tv.css'

import myimages7 from './assets/Images/image3 copy.png'
import { faArrowTrendUp, faBasketShopping, faBullhorn, faCheck, faPlay } from '@fortawesome/free-solid-svg-icons'
function TV(){
    return(
        <>
            <div id="carouselExampleIndicators" className="carousel slide c1" data-bs-ride="carousel"
                data-bs-interval="3000" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active mov">
                        <img src={myimages1} className="d-block w-100 i2" alt="..." />
                        <div className='con1'>
                            <img className='i' src={myimages7} alt="" />
                            <h1>Mirzapur</h1>
                            <div className='lan'>
                                <p>HINDI  |</p>
                                <p>  TAMIL  |</p>
                                <p> TELUNGU  |</p>
                            </div>
                            <p className='green'><FontAwesomeIcon style={{ color: 'rgb(45, 214, 45)' }} icon={faArrowTrendUp} /><span style={{ color: 'rgb(45, 214, 45)' }}> # 1 in India</span></p>
                            <div className='f1'><button style={{ marginRight: '5px' }}  className='h1'>Join prime Watch now</button>
                                <p className='sym sym2 sym3'>+</p>
                                <button style={{ marginBottom: '5px' }} className='sym sym1 sym2'><i className="bi bi-info-circle s"></i></button>
                            </div>
                            <div className='last'><span><FontAwesomeIcon style={{ color: 'rgba(237, 208, 42, 1)' }} icon={faBasketShopping} />  Watch with a Prime Membership</span></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={myimages2} className="d-block w-100 i2" alt="..." />
                        <div className='con1  con3'>
                            <p className='mx'><button className='play1'><FontAwesomeIcon className='play' icon={faPlay} /></button><span className='mx1'>MX</span>Player</p>
                            <h1 className='mn'>SANKALP</h1>
                            <p className='ns'>NEW SERIES</p>
                            <div className='f1'><button className='h2 f2'><FontAwesomeIcon className='play3' icon={faPlay} />Episode 1 Watch Now</button>
                                <button className='sym sym2'>+</button>
                                 <button className='sym sym1 sym2'><i className="bi bi-info-circle s"></i></button>
                            </div>
                            <div className='last last2'><button className='t1'><FontAwesomeIcon className='t2' icon={faCheck} /></button>Mx player (with Ads) </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={myimages3} className="d-block w-100 i2" alt="..." />
                        <div className='con1'>
                            <img className='i' src={myimages7} alt="" />
                            <h1 style={{   color: 'rgb(170, 216, 226)' }}>SCARPETTA</h1>
                            <div className='lan1'>
                                <p> ENGLISH  |</p>
                                <p>HINDI  |</p>
                                <p>  TAMIL  |</p>
                                <p>  TELUNGU  |</p>
                            </div>
                            <p className='green'><FontAwesomeIcon style={{ color: 'rgb(45, 214, 45)' }} icon={faArrowTrendUp} /><span style={{ color: 'rgb(45, 214, 45)' }}> # 5 in India</span></p>
                            <div className='f1'><button style={{ marginRight: '5px' }}  className='h1'>Join prime Watch now</button>
                                <p className='sym sym2 sym3'>+</p>
                                <button style={{ marginBottom: '5px' }} className='sym sym1 sym2'><i className="bi bi-info-circle s"></i></button>
                            </div>
                            <div className='last'><span><FontAwesomeIcon style={{ color: 'rgba(237, 208, 42, 1)' }} icon={faBasketShopping} />   Watch with a Prime Membership</span></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={myimages4} className="d-block w-100 i2" alt="..." />
                        <div className='con1 con4'>
                            <img className='i' src={myimages7} alt="" />
                            <h1 style={{   color: 'rgba(234, 216, 53, 1)',marginLeft:'26px' }}>YOUNG</h1>
                            <h1 style={{   color: 'rgba(234, 216, 53, 1)',marginTop:'-9px'}}>SHERLOCK</h1>
                            <div className='lan1'>
                                <p> ENGLISH  |</p>
                                <p>HINDI  |</p>
                                <p>  TAMIL  |</p>
                                <p>  TELUNGU  |</p>
                            </div>
                            <p className='green'><FontAwesomeIcon style={{ color: 'rgb(45, 214, 45)' }} icon={faArrowTrendUp} /><span style={{ color: 'rgb(45, 214, 45)' }}> # 1 in India</span></p>
                            <div className='f1'><button style={{ marginRight: '5px' }}  className='h1'>Join prime Watch now</button>
                                <p className='sym sym2 sym3'>+</p>
                                <button style={{ marginBottom: '5px' }} className='sym sym1 sym2'><i className="bi bi-info-circle s"></i></button>
                            </div>
                            <div className='last'><span><FontAwesomeIcon style={{ color: 'rgba(237, 208, 42, 1)' }} icon={faBasketShopping} />   Watch with a Prime Membership</span></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={myimages5} className="d-block w-100 i2" alt="..." />
                        <div className='con1 con3'>
                            <img className='i' src={myimages7} alt="" />
                            <h1 style={{   color: 'rgba(234, 216, 53, 1)' }}>SIREN'S KISS</h1>
                            <div className='lan1'>
                                <p>KOREAN  |</p>
                                <p> ENGLISH  |</p>
                                <p>HINDI  |</p>
                            </div>
                            <p className='green'><FontAwesomeIcon  style={{ color: 'rgb(45, 214, 45)',marginRight:'5px' }} icon={faBullhorn} /><span style={{ color: 'rgb(45, 214, 45)' }}>New episode Monday</span></p>
                            <div className='f1'><button style={{ marginRight: '5px' }}  className='h1'>Join prime Watch now</button>
                                <p className='sym sym2 sym3'>+</p>
                                <button style={{ marginBottom: '5px' }} className='sym sym1 sym2'><i className="bi bi-info-circle s"></i></button>
                            </div>
                            <div className='last'><span><FontAwesomeIcon style={{ color: 'rgba(237, 208, 42, 1)' }} icon={faBasketShopping} />   Watch with a Prime Membership</span></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={myimages6} className="d-block w-100 i2" alt="..." />
                        <div className='con1 con3'>
                            <img className='i' src={myimages7} alt="" />
                            <h1 style={{   color: 'rgba(234, 216, 53, 1)' }}>THE CROSS</h1>
                            <div className='lan1'>
                                <p>TAMIL  |</p>
                                <p> ENGLISH  |</p>
                                <p>HINDI  |</p>
                                <p>TELUNGU  |</p>

                            </div>
                            <p className='green'><FontAwesomeIcon style={{ color: 'rgb(45, 214, 45)' }} icon={faArrowTrendUp} /><span style={{ color: 'rgb(45, 214, 45)' }}> # 9 in drama Tv shows </span></p>
                            <div className='f1'><button style={{ marginRight: '5px' }}  className='h1'>Join prime Watch now</button>
                                <p className='sym sym2 sym3'>+</p>
                                <button style={{ marginBottom: '5px' }} className='sym sym1 sym2'><i className="bi bi-info-circle s"></i></button>
                            </div>
                            <div className='last'><span><FontAwesomeIcon style={{ color: 'rgba(237, 208, 42, 1)' }} icon={faBasketShopping} />   Watch with a Prime Membership</span></div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev button1" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next button1" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default TV
