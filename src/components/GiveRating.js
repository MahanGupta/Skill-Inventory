import React from 'react'
import "../style/give_rate.css";

const GiveRating = () => {
  return (
    <div>
      <div className='give_heads'>
        <h2 >Give Ratings :-</h2>
        <hr></hr>
      </div>
    <div className='rate'>
      <input type="text" id="ohr_id" placeholder="OHR ID" name="OHRID"></input>
      <input type="text" id="skill" placeholder="Skill Name" name="skill"></input>
      <input type="text" id="rating" placeholder="Enter Rating" name="rating"></input>

      <button className='btn'>Submit</button>
    </div>
    </div>  )
}

export default GiveRating