import { useState } from "react";
import './Style/Watchlist.css'


function Watchlist() {
    const [selected, setSelected] = useState("Most recent addition");
    const [selectedTab, setSelectedTab] = useState("All");
    const options = [
        "Most recent addition",
        "Title: A - Z",
        "Title: Z - A",
    ];

    return (
        <>
            <div style={{ backgroundColor: 'black' }}>
                <h4 style={{ color: 'white', marginLeft: '30px', paddingTop: '20px' }}>Watchlist</h4>
                <div className="watchdrop">
                    <div style={{ marginLeft: '30px' }}>
                        <button className={`watch ${selectedTab === "All" ? "active" : ""}`} onClick={() => setSelectedTab("All")}>All</button>
                        <button className={`watch ${selectedTab === "movie" ? "active" : ""}`} onClick={() => setSelectedTab("movie")}>Movies</button>
                        <button className={`watch ${selectedTab === "tv" ? "active" : ""}`} onClick={() => setSelectedTab("tv")}>TV Shows</button>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle drop" type="button" id="dropdownMenuButton"
                            data-bs-toggle="dropdown" aria-expanded="false" >{selected}</button>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                            {options.map((option) => (
                                <li key={option}>
                                    <button className={`dropdown-item ${selected === option ? "active" : ""}`} type="button" onClick={() => setSelected(option)} >
                                        {option} </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="w1">You have no TV shows on Your Watchlist</p>
                <p className="w2">Add <u>TV shows</u> and <u>Movies</u> that you want to watch later by clicking Add to Watchlist.</p>
                <div className='footer footer1 footer2 footer3' >
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
export default Watchlist