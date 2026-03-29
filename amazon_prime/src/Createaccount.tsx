import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import myimages from './assets/Images/prime.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Style/Createacc.css'
import { useNavigate } from 'react-router-dom'
function Createacc(){
   const route=useNavigate()
    return(
        <>
       <img style={{height:'50px',width:'70px',marginLeft:'330px'}}  src={myimages} alt="" />
       <div className='createacc'>
        <h6 className='create'>Create Account</h6>
        <p className='detail'>Your Name</p>
        <input className='detailinput' type="text" placeholder='First and Last Name' />
        <p className='detail'>Mobile Number</p>
        <input className='detailinput' type="number" placeholder='Mobile Number' />
        <p className='detail'>Password</p>
        <input className='detailinput' type="password" placeholder='At least 6 Character'/>
        <p className='password'><span style={{marginRight:'5px',color:'rgba(62, 137, 242, 1)'}}><FontAwesomeIcon icon={faCircleInfo} /></span>Passwords must be at least 6 characters</p>
        <p className='verify'>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
        <button className='verifybtn'>Verify Mobile Number</button>
        <p style={{fontSize:'8px',marginBottom:'5px',marginTop:'3px'}}>Already Have an Account? <span style={{color:'rgba(62, 137, 242, 1)',cursor:'pointer'}} onClick={() => route("/Signin")}>Sign in</span></p>
        <p className='statement'>By continuing, you agree to the Amazon<span className='span'> condition of use and Privacy Notice</span></p>
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
export default Createacc