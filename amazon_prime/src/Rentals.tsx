function Rentals() {
    return (
        <>
            <div style={{ backgroundColor: 'black', color: 'white',marginLeft:"20px" }}>
                <h6 style={{marginLeft:'30px',paddingTop:'25px',fontSize:"40px"}}>Purchases & Rentals</h6>
                <p style={{marginLeft:'550px',fontSize:'large',marginTop:'50px'}}>You don't have any Purchases & Rentals</p>
                <p style={{marginLeft:'210px',fontSize:'large',marginTop:'-9px'}}>If videos you were expecting aren't shown, make sure you're signed in and using the correct Amazon account and then <u>refresh this page</u>.</p>
                 <div className='footer footer1 foot fast fast1' >
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
export default Rentals