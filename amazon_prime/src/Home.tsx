import './Style/Home.css'
import myimages from './assets/Images/movie1.jpeg'
import myimages1 from './assets/Images/image3.jpeg'
import myimages3 from './assets/Images/movie3 copy.jpeg'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className='full'>
                <div className='overall1'>
                    <div className='prime1'>
                        <h3>Welcome to Prime video</h3>
                        <p className='content'>Watch the latest movies, TV shows, and Award-winning Amazon Originals</p>
                        <button onClick={() =>
                            navigate("/payment", { state: { price: 799 } })
                        }
                            className='b1'>Join Prime Lite at ₹799/year</button>
                        <p className='caption'>Effectively ₹69/month </p>
                        <button onClick={() =>
                            navigate("/payment", { state: { price: 1499 } })
                        } className='b1'>Join Prime Annual at ₹1499/year</button>
                        <p className='caption'>Effectively ₹125/month </p>
                        <button onClick={() =>
                            navigate("/payment", { state: { price: 299 } })
                        } className='b1'>Join Prime Montly at ₹299/month</button>
                        <div className='last1 last'>
                            <button className='b1'>Compare all plans</button>
                        </div>
                    </div>
                    <img className='image1' src={myimages} alt="" />
                </div>
                <div className='overall1 overall2'>
                    <div className='prime1 prime2'>
                        <h3>Movie rentals on Prime Video</h3>
                        <p className='content content1'>Early Access to new movies, before digital subscription</p>
                        <button className='rent b1'>Rent Now</button>
                    </div>
                    <img className='image1' src={myimages1} alt="" />
                </div>
                <div className='overall1 overall2 overall3'>
                    <div className='prime1 prime2'>
                        <h3>Your favorite subscriptions all in one place</h3>
                        <p className='content content1'>Customers can subscribe to get access to a variety of premium and specialty content, easily accessible within the Prime Video app</p>
                    </div>
                    <div className='imageset'>
                        <img className='icon1' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_AppleTV_V1._AC_SX400_QL80_FP_.png" alt="Apple TV+"></img>
                        <img className='icon1' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Crunchyroll_V1._AC_SX400_QL80_FP_.png" alt="Crunchyroll"></img>
                        <img className='icon1' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_LGP_V1._AC_SX400_QL80_FP_.png" alt="Lionsgate Play"></img>
                        <img className='icon1' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery_V1._AC_SX400_QL80_FP_.png" alt="Discovery+"></img>
                        <img className='icon1' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Anime_V1._AC_SX400_QL80_FP_.png" alt="Anime Times"></img>
                        <img className='icon1' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Manoramamax_V1._AC_SX400_QL80_FP_.png" alt="ManoramaMax"></img>
                        <img className='icon1' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Chaupal_V1._AC_SX400_QL80_FP_.png" alt="Chaupal"></img>
                        <img className='icon1' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_BBC_V1._AC_SX400_QL80_FP_.png" alt="BBC Player"></img>
                        <img className='icon1' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Fancode_V1._AC_SX400_QL80_FP_.png" alt="Fancode"></img>
                    </div>
                </div>
                <div className='overall1 overall2'>
                    <div className='prime1 prime2 prime3'>
                        <h3>Amazon MX Player</h3>
                        <p className='content content1'>Binge watch latest web series, K-drama and more</p>
                        <button className='b1 rent watch5'>Watch For Free</button>
                    </div>
                    <img className='image1' src={myimages3} alt="" />
                </div>
            </div>
            <div className='footer' >
                <img className='foot-img' src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/logo/pv_logo_white._CB548637580_.png" alt="Amazon"></img>
                <div className='down down1'>
                    <p>Terms and Privacy Notice</p>
                    <p>Send as Feedback</p>
                    <p>Help</p>
                </div>
                <p className='para p1'>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
            </div>

        </>
    )
}
export default Home