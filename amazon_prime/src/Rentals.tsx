function Rentals() {
    return (
        <>
            <div style={{ backgroundColor: 'black', color: 'white' }}>
                <h6 style={{marginLeft:'30px',paddingTop:'25px'}}>Purchases & Rentals</h6>
                <p style={{marginLeft:'280px',fontSize:'x-small',marginTop:'20px'}}>You don't have any Purchases & Rentals</p>
                <p style={{marginLeft:'50px',fontSize:'x-small',marginTop:'-9px'}}>If videos you were expecting aren't shown, make sure you're signed in and using the correct Amazon account and then <u>refresh this page</u>.</p>
                <div  className='footer footer1 footer2 footer3' >
                    <img className='foot-img pr' src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/logo/pv_logo_white._CB548637580_.png" alt="Amazon"></img>
                    <div className='down down1 down2 d3'>
                        <p>Terms and Privacy Notice</p>
                        <p>Send as Feedback</p>
                        <p>Help</p>
                        <p className="yyear yyear2">© 1996-2026, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Rentals