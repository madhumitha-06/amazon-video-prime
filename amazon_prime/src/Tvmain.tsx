import Tv from "./Tv"
import { useState } from "react";
import './Style/Tv1.css'
import tv1 from './assets/images/tv1.png'
import tv2 from './assets/images/tv2.png'
import tv3 from './assets/images/tv3.png'
import tv4 from './assets/images/tv4.png'
import tv5 from './assets/images/tv5.png'
import tv6 from './assets/images/tv6.png'
import tv7 from './assets/images/tv7.png'
import tv8 from './assets/images/tv8.png'
import tv9 from './assets/images/tv9.png'
import tv10 from './assets/images/tv10.png'
import tv11 from './assets/images/tv11.png'
import tv12 from './assets/images/tv12.png'
import tv13 from './assets/images/tv13.png'
import tv14 from './assets/images/tv14.png'
import tv15 from './assets/images/tv15.png'
import tv16 from './assets/images/tv16.png'
import tv17 from './assets/images/tv17.png'
import tv18 from './assets/images/tv18.png'
import tv19 from './assets/images/tv19.png'
import tv20 from './assets/images/tv20.png'
import Tv1 from "./Tv1";
import Tv2 from "./Tv2";
import Tv3 from "./Tv3";
import Tv4 from "./Tv4";



function TVmain(){
  const [movies] = useState([
    {
      id: '#10 in adventure movies',
      title: 'Mezapur',
      poster: tv1,
      year: 2024,
      time: '2 h 55 min',
      age: 'U/A 13+',
      description: "Centuries into the future, at the end of Kaliyuga, a prophecy reveals that the next Avatar shall."
    },
    {
      id: '#1 in India',
      title: "Paatalok",
      poster: tv8,
      year: 2026,
      time: '2 h 22 min',
      age: 'U/A 13+',
      description: "A retired soldier, Subedaar Arjun Maurya, takes on local goon, Prince, in a raging battle that cause"
    },
    {
      id: '#4 in India',
      title: "Suzhal",
      poster: tv7,
      year: 2026,
      time: '2 h 25 min',
      age: 'U/A 13+',
      description: "Ikkis is the true story of 21-year-old Lt Arun Khetarpal, the youngest Param Vir Chakra"
    },

    {
      id: '#5 in India',
      title: "I'M Mature",
      poster: tv9,
      year: 2026,
      time: '2 h 10 min',
      age: 'U/A 13+',
      description: "A young graduate's financial desperation drives this silent black comedy, as Mahadev's job"
    },
    {
      id: 'OSCAR® winner',
      title: "Kanmani Srimathi",
      poster: tv6,
      year: 2014,
      time: '2 h 42 min',
      age: 'U/A 16+',
      description: "Christopher Nolan directs this sci-fi epic that follows a former NASA pilot and his crew on action"
    },
  ])
  const [movies1] = useState([
    {
      id: '#10 in adventure movies',
      title: 'From',
      poster: tv11,
      year: 2024,
      time: '2 h 55 min',
      age: 'U/A 13+',
      description: "Pushpa Raj, a coolie-turned-smuggling kingpin, battles a merciless cop determined to dismantle his illegal red sanders operation in Andhra."
    },
    {
      id: '#1 in India',
      title: "Made In India",
      poster: tv12,
      year: 2026,
      time: '2 h 22 min',
      age: 'U/A 13+',
      description: "Tiger Muthuvel Pandian, a retired jailer, is now a family man who leads an ordinary life. Trouble knocks on his door when his son"
    },
    {
      id: '#4 in India',
      title: "The Brave",
      poster: tv13,
      year: 2026,
      time: '2 h 25 min',
      age: 'U/A 13+',
      description: "A pregnant tribal woman desperately searches for her missing husband, aided by a determined High Court advocate fighting for their justice."
    },

    {
      id: '#5 in India',
      title: "Who Killed Jeffery",
      poster: tv19,
      year: 2026,
      time: '2 h 10 min',
      age: 'U/A 13+',
      description: "An innocent man's world shatters after being falsely labeled a terrorist by the media. Irfan must fight to restore his career"
    },
    {
      id: 'OSCAR® winner',
      title: "CO-ED",
      poster: tv16,
      year: 2014,
      time: '2 h 42 min',
      age: 'U/A 16+',
      description: "Seven years after the case related to Vijay and his family was closed, a series of unexpected events brings a truth to light that threatens to change everything"
    }
  ])
  const [movies2] = useState([
    {
      id: 'Spent 18 weeks in Top 10',
      title: "Mandaar",
      poster: tv17,
      year: 2024,
      time: '2 h 20 min',
      age: 'U/A 13+',
      description: "968 AD. The Pandyan assassins gather once again to destroy the Chola dynasty. Now the mighty Chola princes must fight the war"
    },
    {
      id: 'Spent 7 weeks in Top 10',
      title: "Aspirant",
      poster: tv18,
      year: 2025,
      time: '2h',
      age: 'U/A 13+',
      description: "In the wake of tragedy, Michael finds solace coaching a women's football team, rediscovering his passion for the game and family"
    },
    {
      id: '',
      title: "Sherlock",
      poster: tv14,
      year: 2024,
      time: '1 h 50 min',
      age: 'U/A 16+',
      description: "Vijay Rajendran is a happy to go lucky man. Things change when his father becomes terminally ill, and he is left to manage his business empire."
    },
    {
      id: '#9 in horror movies',
      title: "Kabul",
      poster: tv15,
      year: 2018,
      time: '1 h 45 min',
      age: 'A',
      description: "A light-hearted tale about a food delivery guy Pazham, his breezy friendship with Shobana & a quirky bond with a quick"
    },
    {
      id: '#3 in fantasy movies',
      title: "18 Wheels Across India",
      poster: tv20,
      year: 2025,
      time: '2 h 8 min',
      age: 'U/A 7+',
      description: "Krishna Dev aka KD, a laid back cop, works in AP HIT, has to take up a gruesome murder case. As KD unravels the layers"
    }

  ])
  const [movies4] = useState([
    {
      id: 'Spent 18 weeks in Top 10',
      title: "Farzi",
      poster: tv2,
      year: 2024,
      time: '2 h 20 min',
      age: 'U/A 13+',
      description: "Aryan is not able to find a perfect life partner. He meets a perfect girl, Sifra, during an official."
    },
    {
      id: 'Spent 7 weeks in Top 10',
      title: "The Family Man",
      poster: tv3,
      year: 2025,
      time: '2h',
      age: 'U/A 13+',
      description: "Ranjan is stuck in a time loop before his wedding, and must complete a noble deed to break free and marry Titli. A rom-co."
    },
    {
      id: '',
      title: "Inspector Rishi",
      poster: tv4,
      year: 2024,
      time: '1 h 50 min',
      age: 'U/A 16+',
      description: "The ultimate Titan team-up! Godzilla and Kong face a colossal threat from Hollow World, challenging their very exist."
    },
    {
      id: '#9 in horror movies',
      title: "Srikanta",
      poster: tv5,
      year: 2018,
      time: '1 h 45 min',
      age: 'A',
      description: "A rescue mission to the bottom of the ocean is terrorised by a massive prehistoric shark in this action-thriller."
    },
    {
      id: '#3 in fantasy movies',
      title: "Daldal",
      poster: tv10,
      year: 2025,
      time: '2 h 8 min',
      age: 'U/A 7+',
      description: "Shaped by his MGR-devotee grandfather, Ramu's hidden hero awakens after tragedy, dragging"
    }
  ])
    return(
        <>
        <div className='o1'>
        <Tv></Tv>
        <p className="p">Movies we think you'll like</p>
        <div className="rowwrapper">
          <div className="o2">
            {
              movies.map((value) => {
                return (
                  <Tv1 parent={value} />
                )
              }
              )
            }
          </div>
        </div>
        <p className="p">Popular Indian movies – Free with ads</p>
        <div className="o2">
          {
            movies1.map((value) => {
              return (
                <Tv2 parent1={value} />
              )
            }
            )
          }
        </div>
        <p className="p">Blockbuster movies- Free with ads</p>
        <div className="o2">
          {
            movies2.map((value) => {
              return (
                <Tv3 parent2={value} />
              )
            }
            )
          }
        </div>
        <p className="p">Spotlight movies</p>
        <div className="o2">
          {
            movies4.map((value) => {
              return (
                <Tv4 parent3={value} />
              )
            }
            )
          }
        </div>
        <button className="see">See more</button>
        <div className='footer footer1' >
          <img className='foot-img' src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/logo/pv_logo_white._CB548637580_.png" alt="Amazon"></img>
          <div className='down down1 down2'>
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
export default TVmain
