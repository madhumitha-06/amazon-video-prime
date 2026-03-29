// import myimages from './assets/Images/c1.jpeg'
// import myimages1 from './assets/Images/T1.jpeg'
// import myimages2 from './assets/Images/T2.jpeg'
// import myimages3 from './assets/Images/T3.jpeg'
// import myimages4 from './assets/Images/T4.jpeg'
// import myimages5 from './assets/Images/T5.jpeg'
// import myimages6 from './assets/Images/T6.jpeg'
import myimages7 from './assets/images/image3 copy.png'
import myVideo from './assets/images/bluff.mp4'
import myVideo1 from './assets/images/ikkis.mp4'
import myVideo2 from './assets/images/anaconda.mp4'
import myVideo3 from './assets/images/tumeri.mp4'
import myVideo4 from './assets/images/cobra.mp4'
import myVideo5 from './assets/images/walter.mp4'
import './Style/movie.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
function movie1() {
    
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide c1" data-bs-ride="carousel"
                data-bs-interval="30000" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active mov1">
                        {/* <img src={myimages1} className="d-block w-100 i2" alt="..." /> */}
                        <video autoPlay  muted  className="hero-video i2" width="100%" style={{marginTop:'-40px',height:'320px'}} >
                            <source src={myVideo} type="video/mp4" />
                        </video>
                        <div className='con1'>
                            {/* <img className='i' src={myimages7} alt="" /> */}
                            <h1 style={{marginTop:'30px',fontSize:'40px'}}>SUBEDAAR</h1>
                            <div className='lan'>
                                <p>HINDI  |</p>
                                <p>  TAMIL  |</p>
                                <p> TELUNGU  |</p>
                            </div>
                            <p className='green'><FontAwesomeIcon style={{ color: 'rgb(45, 214, 45)' }} icon={faArrowTrendUp} /><span style={{ color: 'rgb(45, 214, 45)' }}> # 1 in India</span></p>
                            <div className='f1'><button style={{ marginRight: '5px' }} className='h1'>Join prime Watch now</button>
                                <p className='sym sym2 sym3'>+</p>
                                <button style={{ marginBottom: '5px' }} className='sym sym1 sym2'><i className="bi bi-info-circle s"></i></button>
                            </div>
                            <div className='last'><span><FontAwesomeIcon style={{ color: 'rgba(237, 208, 42, 1)' }} icon={faBasketShopping} />  Watch with a Prime Membership</span></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src={myimages2} className="d-block w-100 i2" alt="..." /> */}
                        <video  autoPlay muted loop className="hero-video i2" width="100%" style={{marginTop:'-40px',height:'320px'}} >
                            <source src={myVideo2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className='con1 con2'>
                            <h1 style={{ color: 'rgba(236, 87, 12, 1)' }}>ANACONDA</h1>
                            <div className='lan1'>
                                <p> ENGLISH  |</p>
                                <p>HINDI  |</p>
                                <p>  TAMIL  |</p>
                                <p> TELUNGU  |</p>
                            </div>
                            <div className='f1'><button style={{ marginRight: '5px' }} className='h1'>Join prime Watch now</button>
                                <p className='sym sym2 sym3'>+</p>
                                <button style={{ marginBottom: '5px' }} className='sym sym1 sym2'><i className="bi bi-info-circle s"></i></button>
                            </div>
                            <div className='last'><span><FontAwesomeIcon style={{ color: 'rgba(237, 208, 42, 1)' }} icon={faBasketShopping} /> Available on Rent</span></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src={myimages3} className="d-block w-100 i2" alt="..." /> */}
                        <video  autoPlay muted  loop className="hero-video i2" width="100%" style={{marginTop:'-40px',height:'320px'}}>
                            <source src={myVideo3} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className='con1'>
                            <h1 style={{ color: 'rgba(81, 203, 237, 1)' }}>tu meri main tera</h1>
                            <h1 className='heading' style={{ color: 'rgba(65, 220, 228, 1)' }}>main tera tu meri</h1>
                            <div className='lan1'>
                                <p> ENGLISH  |</p>
                                <p>HINDI  |</p>
                                <p>  TAMIL  |</p>
                            </div>
                            <p className='green'><FontAwesomeIcon style={{ color: 'rgb(45, 214, 45)' }} icon={faArrowTrendUp} /><span style={{ color: 'rgb(45, 214, 45)' }}> # 5 in India</span></p>
                            <div className='f1'><button style={{ marginRight: '5px' }} className='h1'>Join prime Watch now</button>
                                <p className='sym sym2 sym3'>+</p>
                                <button style={{ marginBottom: '5px' }} className='sym sym1 sym2'><i className="bi bi-info-circle s"></i></button>
                            </div>
                            <div className='last'><span><FontAwesomeIcon style={{ color: 'rgba(237, 208, 42, 1)' }} icon={faBasketShopping} />   Watch with a Prime Membership</span></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src={myimages4} className="d-block w-100 i2" alt="..." /> */}
                        <video autoPlay muted loop className="hero-video i2"width="100%" style={{marginTop:'-40px',height:'320px'}} >
                            <source src={myVideo1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className='con1 con2'>
                            <h1 style={{ color: 'rgba(244, 228, 180, 1)' }}>IKKIS</h1>
                            <div className='lan1'>
                                <p> ENGLISH  |</p>
                                <p>HINDI  |</p>
                                <p>  TAMIL  |</p>
                                <p> TELUNGU  |</p>
                            </div>
                            <div className='f1'><button style={{ marginRight: '5px' }} className='h1'>Join prime Watch now</button>
                                <p className='sym sym2 sym3'>+</p>
                                <button style={{ marginBottom: '5px' }} className='sym sym1 sym2'><i className="bi bi-info-circle s"></i></button>
                            </div>
                            <div className='last'><span><FontAwesomeIcon style={{ color: 'rgba(237, 208, 42, 1)' }} icon={faBasketShopping} /> Available on Rent</span></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src={myimages5} className="d-block w-100 i2" alt="..." /> */}
                        <video autoPlay muted  loop className="hero-video i2" width="100%" style={{marginTop:'-40px',height:'320px'}} >
                            <source src={myVideo4} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className='con1 con3'>
                            <img className='i' src={myimages7} alt="" />
                            <h1 className='head' style={{ color: 'lightgold' }}>COBRA</h1>
                            <p className='green'><FontAwesomeIcon style={{ color: 'rgb(45, 214, 45)' }} icon={faArrowTrendUp} /><span style={{ color: 'rgb(45, 214, 45)' }}> # 2 in India</span></p>
                            <div className='f1'><button style={{ marginRight: '5px' }} className='h1'>Join prime Watch now</button>
                                <p className='sym sym2 sym3'>+</p>
                                <button style={{ marginBottom: '5px' }} className='sym sym1 sym2'><i className="bi bi-info-circle s"></i></button>
                            </div>
                            <p className='last1'><span><FontAwesomeIcon style={{ color: 'rgba(237, 208, 42, 1)' }} icon={faBasketShopping} /> Subscribe for ₹29/month for 1 month(s) and ₹39/month thereafter</span></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src={myimages6} className="d-block w-100 i2" alt="..." /> */}
                         <video autoPlay muted  loop className="hero-video i2" width="100%" style={{marginTop:'-40px',height:'320px'}} >
                            <source src={myVideo5} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className='con1 con3'>
                            <img className='i' style={{ marginBottom: '5px' }} src={myimages7} alt="" />
                            <h1 className='head' style={{ color: 'lightgold' }}>WALTER</h1>
                            <p className='green'><FontAwesomeIcon style={{ color: 'rgb(45, 214, 45)' }} icon={faArrowTrendUp} /><span style={{ color: 'rgb(45, 214, 45)' }}> # 3 in India</span></p>
                            <div className='f1'><button style={{ marginRight: '5px' }} className='h1'>Join prime Watch now</button>
                                <p className='sym sym2 sym3'>+</p>
                                <button style={{ marginBottom: '5px' }} className='sym sym1 sym2'><i className="bi bi-info-circle s"></i></button>
                            </div>
                            <p className='last1'><span><FontAwesomeIcon style={{ color: 'rgba(237, 208, 42, 1)' }} icon={faBasketShopping} /> Subscribe for ₹29/month for 1 month(s) and ₹39/month thereafter</span></p>
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
export default movie1