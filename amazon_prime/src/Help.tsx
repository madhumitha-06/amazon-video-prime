import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Style/Help.css'
import { faClock, faGear, faTv } from '@fortawesome/free-solid-svg-icons'
import myimages from './assets/images/prime.png'

function Help() {
    return (
        <>
            <div style={{ height: '25px', width: '100%', backgroundColor: "rgba(209, 229, 236, 1)", paddingLeft: '25px', paddingTop: '5px', fontSize: '10px', fontWeight: 'bold' }}>
                <p>Help</p>
            </div>
            <p className="vs">Prime video Support</p>
            <input className='seabox' type="text" placeholder=' Search' autoFocus />
            <div className='help'>
                <div className='class1'>
                    <p style={{ paddingTop: '5px', paddingBottom: '5px' }}>Setting</p>
                    <p className='r1'><FontAwesomeIcon className='r2' icon={faGear} /><span>Account Details</span></p>
                    <p className='r1'><FontAwesomeIcon className='r2' icon={faTv} /><span>Register a Device</span></p>
                    <p className='r1'><i className="bi bi-people-fill r2"></i><span>Parental Controls</span></p>
                    <p className='r1'><FontAwesomeIcon className='r2' icon={faClock} /><span>Watch History</span></p>
                    <p className='r1'><i className="bi bi-person-fill r2"></i><span>Prime Video Profiles</span></p>
                </div>
                <div className='class2'>
                    <img className=' img1 prim1' src={myimages} alt="" />
                    <div style={{ backgroundColor: 'lightgrey', fontSize: 'xx-small', height: '70px', width: '340', marginTop: '8px' }}>
                        <p className='class2p'>Need to cancel prime Video Add-On Subscription?</p>
                        <p className='class2p1'>Find out how to easily cancel prime Video Add-On Subscription Online</p>
                    </div>
                </div>
                <div className='class1 class3'>
                    <p style={{ paddingTop: '5px', paddingBottom: '5px' }}>Popular Articles</p>
                    <p className='r1 r3'>cancel an accidental purchase</p>
                    <p className='r1 r3'>Rent and buy prime video title</p>
                    <p className='r1 r3'>install prime vidoe on device</p>
                    <p className='r1 r3'>issues while playing the prime video title</p>
                    <p className='r1 r3'>How do i cast prime vido to my tv</p>
                </div>
            </div>
            <div className="accordion acord" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header acord1">
                        <button className="accordion-button acord2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Setting up Prime video
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body acord3">
                            <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header  acord1 ">
                        <button className="accordion-button collapsed acord2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Adds in Prime Video
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body acord3">
                            <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header  acord1">
                        <button className="accordion-button collapsed  acord2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Cancel
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body acord3">
                            <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height:'50px',width:'100%',backgroundColor: "rgba(209, 229, 236, 1)",marginTop:'30px',display:'flex',paddingLeft:'200px',paddingTop:'10px',gap:'20px'}}>
                <input className='inp' type="text" placeholder='search...' />
                <button className='con'>Contact us</button>
            </div>
            <div className='footer footer1 footer2 footer3 footer4 footer5' >
                <img className='foot-img pr' src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/logo/pv_logo_white._CB548637580_.png" alt="Amazon"></img>
                <div className='down down1 down2 d3'>
                    <p>Terms and Privacy Notice</p>
                    <p>Send as Feedback</p>
                    <p>Help</p>
                    <p className="yyear yyear2">© 1996-2026, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </>
    )
}
export default Help