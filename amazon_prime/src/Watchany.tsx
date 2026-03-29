import mov2 from './assets/images/watch.jpeg'
import mov3 from './assets/images/watch1.jpeg'
import mov4 from './assets/images/watch2.jpeg'
import mov5 from './assets/images/watch3.jpeg'
import mov6 from './assets/images/watch4.jpeg'
import mov7 from './assets/images/watch5.jpeg'
import mov8 from './assets/images/watch6.jpeg'
import mov9 from './assets/images/watch7.jpeg'
import mov10 from './assets/images/watch8.jpeg'
import mov11 from './assets/images/icon1.jpeg'
import mov12 from './assets/images/icon2.jpeg'
import mov13 from './assets/images/icon3.jpeg'

import './Style/Watchany.css'

function Watchany() {
    return (
        <>
            <img className='watchimg' src={mov2} alt="" />
            <h5 className='watchany1'>Watch anywhere, anytime</h5>
            <p className='watchany2'>Start watching Prime Video on your favorite</p>
            <p className='watchany3'>devices anywhere, anytime</p>
            <p className='newprime'>Are you new to Prime?</p>
            <button className='monthly'>Sign up for Prime Video(monthly membership)</button>
            <h6 className='primewatch'>It's easy to watch Prime Video on your device.</h6>
            <p className='locate'>Locate your device below, follow the simple instructions and you'll be able to start watching instantly. To learn more, go to <span className='locatespan'>Devices Compatible with Prime Video</span>.</p>
            <div className='side'>
                <img className='sideimg' src={mov3} alt="" />
                <div>
                    <h6>Smart TV or Blu-Ray Player</h6>
                    <ol>
                        <li> If the Amazon Prime Video app isn't pre-installed on your Smart TV or Blu-ray player, download it from your device's app store.</li>
                        <li> Open the Amazon Prime Video app and sign in with your Amazon Prime or Prime Video account.</li>
                        <li> Choose a movie or TV Show and start streaming.</li>
                    </ol>
                </div>
            </div>
            <div className='side'>
                <img className='sideimg' src={mov4} alt="" />
                <div>
                    <h6>Streaming Media Player</h6>
                    <ol>
                        <li>Open the Prime Video app. If the app is not pre-installed, you can download it from your streaming media player's app store. </li>
                        <li>Select "Sign in and start watching" to enter your account information directly on your device. </li>
                        <li>Choose "Register on the Amazon Website" to get a 5-6 character code.</li>
                    </ol>
                    <p style={{ fontSize: '7px', marginLeft: '30px' }} className='locatespan'>Sign in to your Amazon account and enter your code</p>
                </div>
            </div>
            <div className='side'>
                <img className='sideimg' src={mov5} alt="" />
                <div>
                    <h6>Game console</h6>
                    <ol>
                        <li>  If the Amazon Prime Video app is not pre-installed on your console, download it from your console’s app store.</li>
                        <li> Open the Amazon Prime Video app and sign in with your Amazon Prime or Prime Video account</li>
                        <li>  Choose a movie or TV Show and start streaming</li>
                    </ol>
                </div>
            </div>
            <div className='side'>
                <img className='sideimg' src={mov6} alt="" />
                <div>
                    <h6>Fire Tablet</h6>
                    <ol>
                        <li> Go to the Video of your tablet.</li>
                        <li> Choose a movie or TV Show and start streaming.</li>
                    </ol>
                </div>
            </div>
            <div className='side'>
                <img className='sideimg' src={mov7} alt="" />
                <div>
                    <h6>iOS Phone or Tablet</h6>
                    <ol>
                        <li>Go to the Apple app store on your device and download the Amazon Prime Video app.</li>
                        <li> Open the Amazon Prime Video app and sign in with your Amazon Prime or Prime Video account.</li>
                        <li>Choose a movie or TV Show and start streaming directly from the app.</li>
                    </ol>
                </div>
            </div>
            <div className='side'>
                <img className='sideimg' src={mov8} alt="" />
                <div>
                    <h6>Android Phone or Tablet</h6>
                    <ol>
                        <li> If the Amazon Prime Video app isn't pre-installed on your Smart TV or Blu-ray player, download it from your device's app store.</li>
                        <li> Open the Amazon Prime Video app and sign in with your Amazon Prime or Prime Video account.</li>
                        <li> Choose a movie or TV Show and start streaming.</li>
                    </ol>
                </div>
            </div>
            <div className='side'>
                <img className='sideimg' src={mov9} alt="" />
                <div>
                    <h6>Google Chromecast</h6>
                    <ol>
                        <li>  From the Prime Video app, select the Cast icon. </li>
                        <li>Select the Chromecast device you want to use. Note: Your iOS or Android device must be connected to the same Wi-Fi network as your Chromecast.</li>
                        <li> Select a title you want to watch. The title you have selected is shown on the TV that the Chromecast is connected to.</li>
                    </ol>
                </div>
            </div>
            <div className='side'>
                <img className='sideimg' src={mov10} alt="" />
                <div>
                    <h6>Windows PC or Tablet</h6>
                    <ol>
                        <li>On your device, go to the Microsoft Store and download the Amazon Prime Video app.</li>
                        <li>Open the Amazon Prime Video app and sign in with your Amazon Prime or Prime Video account.</li>
                        <li> Choose a movie or TV show and watch in the app </li>
                    </ol>
                </div>
            </div>
            <p className='get'>Get the app</p>
            <div className='is'>
                <img src={mov11} alt="" />
                <img src={mov12} alt="" />
                <img src={mov13} alt="" />
            </div>
            <div className='footer footer1 footer2 footer3 footer4' >
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
export default Watchany