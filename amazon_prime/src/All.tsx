import { useNavigate } from 'react-router-dom'
import './Style/All.css'

function All() {
    const route = useNavigate()
    return (
        <>
            <div style={{ backgroundColor: 'black', color: 'white', paddingLeft: '50px' }}>
                <h6 style={{ paddingTop: '40px', fontSize: "40px" }}>My Stuff</h6>
                <div>
                    <p className="heads1">Watchlist</p>
                    <p className='text text3'>Your Watchlist is currently empty</p>
                    <p className='text text2'>Add <u>TV </u>shows and <u>Movies</u> that you want to watch later by clicking Add to Watchlist.</p>
                    <button className='browse' onClick={() => route('/')}>Browse Home</button>
                </div>
                <div>
                    <p className="heads1">Purchases & Rentals</p>
                    <p className='text text3'>You don't have any Purchases & Rentals</p>
                    <p className='text text2'>If videos you were expecting aren't shown, make sure you're signed in and using the correct Amazon account and then <u>refresh this page</u>.</p>
                    <button className='browse' onClick={() => route('/movies')}>Browse Store</button>
                </div>
                <div>
                    <p className="heads1">Pre-orders</p>
                    <p className='text text3'>You don't have any Pre-orders</p>
                    <p className='text text2'>If videos you were expecting aren't shown, make sure you're signed in and using the correct Amazon account and then <u>refresh this page</u>.</p>
                    <button className='browse' onClick={() => route('/')}>Browse Home</button>
                </div>
                <div className='footer footer1 foot fast' >
                    <img className='foot-img' src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/logo/pv_logo_white._CB548637580_.png" alt="Amazon"></img>
                    <div className='down down1 down3'>
                        <p>Terms and Privacy Notice</p>
                        <p>Send as Feedback</p>
                        <p>Help</p>
                        <p className="yyear">© 1996-2026, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default All