import React, { useState } from 'react'
import "../css/CricketHockeyPlayers.css"

const Container = () => {
  const [SportsData, setSportsData] = useState({
    headerName: "SPORTS",
    cricketSubHeader: "Indian Cricket Players",
    cricket: "CRICKET PLAYERS",
    hockey: "HOCKEY PLAYERS",
    hockeySubHeader: "Indian Hockey Players",
    aboutCricket: "About Cricket",
    aboutHockey: "About Hockey",
    playersList1: ["Dhoni", "Sachin", "Yuvraj", "Dravid", "Kohli", "Anil Kumble", "Hrabajan", "Zaheer Khan", "Bhuvaneshwar Kumar", "Ishant Sharma"],
    playersList2: ["PR Sreejesh",
    "Krishan Bahadur Pathak",
    "Harmanpreet Singh",
    "Varun Kumar",
    "Surender Kumar",
    "Gurinder Singh",
    "Rupinder Pal Singh",
    "Amit Rohidas"],
    aboutCricketcontent: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard pitch with a wicket at each end, each comprising two bails balanced on three stumps.",
    aboutHockeycontent: "Hockey is a sport in which two teams play against each other by trying to manoeuvre a ball or a puck into the opponent's goal using a hockey stick. There are many types of hockey such as bandy, field hockey, ice hockey and rink hockey.",
  })
  return (
    <>
      <div className='Container'>
        <h1 className='ContainerH1'>{SportsData.headerName}</h1>
        <h2 className='ContainerH2'>{SportsData.cricket}</h2>
        <h3 className='ContainerH3'>{SportsData.cricketSubHeader}</h3>
        <ol className='ContainerPlayersList'>
          {SportsData.playersList1.map(ele => <li className='ContainerPlayers'>{ele}</li>)}
        </ol>

        <h4 className='ContainerH4'>{SportsData.aboutCricket}</h4>
        <p className='AboutGameContent'>{SportsData.aboutCricketcontent}</p>
  
        <h2 className='ContainerH2'>{SportsData.hockey}</h2>
        <h3 className='ContainerH3'>{SportsData.hockeySubHeaderSubHeader}</h3>
        <ol className='ContainerPlayersList'>
          {SportsData.playersList2.map(ele => <li className='ContainerPlayers'>{ele}</li>)}
        </ol>

        <h4 className='ContainerH4'>{SportsData.aboutHockey}</h4>
        <p className='AboutGameContent'>{SportsData.aboutHockeycontent}</p>
      </div>
    </>
  )
}

export default Container