import myimages from './assets/images/prime.png'
import './Style/Signin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from 'react-router-dom';

function Signin() {
    const route = useNavigate()
    const mynav=()=>{
     route('/')
    }
    return (
        <>
            <img className='img1' src={myimages} alt="" />
            <div className='main'>
                <p className='signin'>Sign in</p>
                <p className='enter'>Enter mobile number or email</p>
                <input className='input' type="text" />
                <div>
                    <button className='btn2' onClick={mynav}>Continue</button>
                </div>
                <p className='statement'>By continuing, you agree to the Amazon<span className='span'> condition of use and Privacy Notice</span></p>
                <div className="dropdown">
                    <span
                        className="need dropdown-toggle dropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Need help?
                    </span>

                    <ul className="dropdown-menu">
                        <li>
                            <span className="forgot-text">
                                Forgot your password
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='new'>New to Amazon ?</p>
            <div className='btn3'>
            <button className='button3' onClick={() => route("/createacc")}>Create Your Amazon Account</button>
            </div>
            <hr />
            <div className='down'>
                <p>Terms and Privacy Notice</p>
                <p>Send as Feedback</p>
                <p>Help</p>
            </div>
            <p className='para'>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
        </>
    )
}
export default Signin