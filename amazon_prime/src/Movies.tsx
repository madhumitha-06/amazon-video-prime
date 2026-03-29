import { useState } from "react";
import Cards from "./Cards"
import Cards2 from "./Cards2";
import Movie1 from "./Movie1"
import './Style/movie.css'
import './Style/cards.css'
import mov1 from './assets/Images/mov1.png'
import mov2 from './assets/Images/mov2.png'
import mov3 from './assets/Images/mov3.png'
import mov4 from './assets/Images/mov4.png'
import mov5 from './assets/Images/mov5.png'
import mov6 from './assets/Images/mov6.png'
import mov7 from './assets/Images/mov7.png'
import mov8 from './assets/Images/mov8.png'
import mov9 from './assets/Images/mov9.png'
import mov10 from './assets/Images/mov10.png'
import mov11 from './assets/Images/mov11.png'
import mov12 from './assets/Images/mov12.png'
import mov13 from './assets/Images/mov13.png'
import mov14 from './assets/Images/mov14.png'
import mov15 from './assets/Images/mov15.png'
import mov16 from './assets/Images/mov16.png'
import mov17 from './assets/Images/mov17.png'
import mov18 from './assets/Images/mov18.png'
import mov19 from './assets/Images/mov19.png'
import mov20 from './assets/Images/mov20.png'
import Cards3 from "./Card3";
import Cards4 from "./Card4";


function Movies() {
  const [movies, setmovies] = useState([
    {
      id: '#10 in adventure movies',
      title: 'Kalki 2898 AD',
      poster: mov1,
      year: 2024,
      time: '2 h 55 min',
      age: 'U/A 13+',
      description: "Centuries into the future, at the end of Kaliyuga, a prophecy reveals that the next Avatar shall."
    },
    {
      id: '#1 in India',
      title: "SUBEDAAR",
      poster: mov8,
      year: 2026,
      time: '2 h 22 min',
      age: 'U/A 13+',
      description: "A retired soldier, Subedaar Arjun Maurya, takes on local goon, Prince, in a raging battle that cause"
    },
    {
      id: '#4 in India',
      title: "Ikkis",
      poster: mov7,
      year: 2026,
      time: '2 h 25 min',
      age: 'U/A 13+',
      description: "Ikkis is the true story of 21-year-old Lt Arun Khetarpal, the youngest Param Vir Chakra"
    },

    {
      id: '#5 in India',
      title: "Gandhi Talks",
      poster: mov9,
      year: 2026,
      time: '2 h 10 min',
      age: 'U/A 13+',
      description: "A young graduate's financial desperation drives this silent black comedy, as Mahadev's job"
    },
    {
      id: 'OSCAR® winner',
      title: "Interstellar",
      poster: mov6,
      year: 2014,
      time: '2 h 42 min',
      age: '',
      description: "Christopher Nolan directs this sci-fi epic that follows a former NASA pilot and his crew on action"
    },
  ])
  const [movies1, setmovies1] = useState([
    {
      id: '#10 in adventure movies',
      title: 'Pushpa : The Rise',
      poster: mov11,
      year: 2024,
      time: '2 h 55 min',
      age: 'U/A 13+',
      description: "Pushpa Raj, a coolie-turned-smuggling kingpin, battles a merciless cop determined to dismantle his illegal red sanders operation in Andhra."
    },
    {
      id: '#1 in India',
      title: "Jailer",
      poster: mov12,
      year: 2026,
      time: '2 h 22 min',
      age: 'U/A 13+',
      description: "Tiger Muthuvel Pandian, a retired jailer, is now a family man who leads an ordinary life. Trouble knocks on his door when his son"
    },
    {
      id: '#4 in India',
      title: "Jai Bhim",
      poster: mov13,
      year: 2026,
      time: '2 h 25 min',
      age: 'U/A 13+',
      description: "A pregnant tribal woman desperately searches for her missing husband, aided by a determined High Court advocate fighting for their justice."
    },

    {
      id: '#5 in India',
      title: "FIR",
      poster: mov19,
      year: 2026,
      time: '2 h 10 min',
      age: 'U/A 13+',
      description: "An innocent man's world shatters after being falsely labeled a terrorist by the media. Irfan must fight to restore his career"
    },
    {
      id: 'OSCAR® winner',
      title: "Dharsiyam",
      poster: mov16,
      year: 2014,
      time: '2 h 42 min',
      age: 'U/A 16+',
      description: "Seven years after the case related to Vijay and his family was closed, a series of unexpected events brings a truth to light that threatens to change everything"
    }
  ])
  const [movies2, setmovies2] = useState([
    {
      id: 'Spent 18 weeks in Top 10',
      title: "Ponniyin Selvan Part 2",
      poster: mov17,
      year: 2024,
      time: '2 h 20 min',
      age: 'U/A 13+',
      description: "968 AD. The Pandyan assassins gather once again to destroy the Chola dynasty. Now the mighty Chola princes must fight the war"
    },
    {
      id: 'Spent 7 weeks in Top 10',
      title: "Bigil",
      poster: mov18,
      year: 2025,
      time: '2h',
      age: 'U/A 13+',
      description: "In the wake of tragedy, Michael finds solace coaching a women's football team, rediscovering his passion for the game and family"
    },
    {
      id: '',
      title: "Varisu",
      poster: mov14,
      year: 2024,
      time: '1 h 50 min',
      age: 'U/A 16+',
      description: "Vijay Rajendran is a happy to go lucky man. Things change when his father becomes terminally ill, and he is left to manage his business empire."
    },
    {
      id: '#9 in horror movies',
      title: "Thiruchitrambalam",
      poster: mov15,
      year: 2018,
      time: '1 h 45 min',
      age: 'A',
      description: "A light-hearted tale about a food delivery guy Pazham, his breezy friendship with Shobana & a quirky bond with a quick"
    },
    {
      id: '#3 in fantasy movies',
      title: "HIT (The Second Case)",
      poster: mov20,
      year: 2025,
      time: '2 h 8 min',
      age: 'U/A 7+',
      description: "Krishna Dev aka KD, a laid back cop, works in AP HIT, has to take up a gruesome murder case. As KD unravels the layers"
    }

  ])
  const [movies4, setmovies4] = useState([
    {
      id: 'Spent 18 weeks in Top 10',
      title: "Teri Baaton Mein Aisa Uljha Jiya",
      poster: mov2,
      year: 2024,
      time: '2 h 20 min',
      age: 'U/A 13+',
      description: "Aryan is not able to find a perfect life partner. He meets a perfect girl, Sifra, during an official."
    },
    {
      id: 'Spent 7 weeks in Top 10',
      title: "Bhool Chuk Maaf",
      poster: mov3,
      year: 2025,
      time: '2h',
      age: 'U/A 13+',
      description: "Ranjan is stuck in a time loop before his wedding, and must complete a noble deed to break free and marry Titli. A rom-co."
    },
    {
      id: '',
      title: "Godzilla x Kong: The New Empire",
      poster: mov4,
      year: 2024,
      time: '1 h 50 min',
      age: 'U/A 16+',
      description: "The ultimate Titan team-up! Godzilla and Kong face a colossal threat from Hollow World, challenging their very exist."
    },
    {
      id: '#9 in horror movies',
      title: "The Meg",
      poster: mov5,
      year: 2018,
      time: '1 h 45 min',
      age: 'A',
      description: "A rescue mission to the bottom of the ocean is terrorised by a massive prehistoric shark in this action-thriller."
    },
    {
      id: '#3 in fantasy movies',
      title: "Vaa Vaathiyaar",
      poster: mov10,
      year: 2025,
      time: '2 h 8 min',
      age: 'U/A 7+',
      description: "Shaped by his MGR-devotee grandfather, Ramu's hidden hero awakens after tragedy, dragging"
    }
  ])
  return (
    <>
      <div className='o1'>
        <Movie1 />
        <p className="p">Movies we think you'll like</p>
        <div className="rowwrapper">
          <div className="o2">
            {
              movies.map((value) => {
                return (
                  <Cards parent={value} />
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
                <Cards2 parent1={value} />
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
                <Cards3 parent2={value} />
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
                <Cards4 parent3={value} />
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
export default Movies