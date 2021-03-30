import React from 'react'

function About() {
    return(
      <div className="about">

          <img src="lisaturtle.jpg" alt="What is art? Are we art? Is art art?" />
          <p>I found a database of the artwork from the Modern Museum of Art (MoMA) in NYC. It was five years old but very thorough. 
            <br/>Taking just the paintings with images, I seeded my backend API and ended up with 1,994 paintings.<br />
            Because there are so many, I have loaded 24 random paintings at a time, which you can refresh with the click of a button. <br/>
            I recommend creating a Room first. Then, if you see a painting you like, you can save it to a room you created and make your own exhibits.<br />
            Have fun exploring the beautiful world of modern paintings!</p>
            <p>-- Natalie, creator of DEC•U•RATOR</p>

      </div>

    )
} 

export default About;