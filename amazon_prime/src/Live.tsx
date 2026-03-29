import { useState } from "react"
import Livetv from "./Livetv"
import './Style/Live.css'
import mov1 from './assets/Images/cri1.jpeg'
import mov2 from './assets/Images/cri2.jpeg'
import mov3 from './assets/Images/cri3.jpeg'
import mov4 from './assets/Images/cri1.jpeg'
import Live1 from "./Live1"
function Live() {
    const [movies, setmovies] = useState([
        {
            id: 'Live at 6:30 PM',
            title: 'Royal Riders Punjab vs. India Tigers',
            poster: mov1,
        },
        {
            id: 'Tomorrow 3:30 PM',
            title: "Australia vs. Korea DPR",
            poster: mov2,
        },
        {
            id: 'Tomorrow 5 PM',
            title: "Chennaiyin FC vs. Mohammedan SC",
            poster: mov3,
        },

        {
            id: 'Tomorrow 6:30 PM',
            title: "Konark Suryas Odisha vs. Southern Super Stars",
            poster: mov4,
        }
    ])
    return (
        <>
            <div className='o1'>
                <p className="p">FanCode: Live and upcoming events</p>
                <div className="rowwrapper">
                    <div className="o2">
                        {
                            movies.map((value) => {
                                return (
                                    <Livetv parent={value} />
                                )
                            }
                            )
                        }
                    </div>
                    <Live1 />
                    <div className='footer footer1 footer2' >
                        <img className='foot-img' src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/logo/pv_logo_white._CB548637580_.png" alt="Amazon"></img>
                        <div className='down down1 down2'>
                            <p>Terms and Privacy Notice</p>
                            <p>Send as Feedback</p>
                            <p>Help</p>
                            <p className="yyear">© 1996-2026, Amazon.com, Inc. or its affiliates</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Live