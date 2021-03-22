import React from 'react'

function About() {
    return(
      <div className="about">

          <img src="lisaturtle.jpg" alt="What is art? Are we art? Is art art?" />
          <p>I found a database of the artwork from the Modern Museum of Art (MoMA) in NYC. It was five years old but very thorough. 
            <br/>Taking just the paintings with images, I seeded my backend API and ended up with 1,994 paintings.<br />
            In this app, you can peruse all the paintings and save them to rooms you create and make your own exhibits.</p>
      </div>

    )
} 

export default About;