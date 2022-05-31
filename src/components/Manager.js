import React from 'react'
import "../style/manager.css"
import GiveRating from './GiveRating'
import SearchEmp from './SearchEmp'

const Manager = () => {
  return (
    <div>
    <div className="m-details">
    <div className='m-left'>
     <div className='m1'>
       <div className='m-details-name'>Name :- </div>
       <div>--------</div>
     </div>
    <div className='m1'>
      <div>Manager ID :- </div>
      <div>--------</div>
    </div>
    <div className='m1'>
      <div>Email :- </div>
      <div>--------</div>
    </div>
    <div className='m1'>
      <div>Mobile No :- </div>
      <div>---------</div>
    </div>
    </div>
    <div className='m-right'>
    <div className='m1'>
      <div>Date of Birth :- </div>
      <div>---------</div>
    </div>
    <div className='m1'>
      <div>Gender :- </div>
      <div>----------</div>
    </div>
    <div className='m1'>
    <div>Job Type :- </div>
    <div>--------</div>
    </div>
    </div>
  </div>
  <SearchEmp />  
  <GiveRating />    
</div>
  )
}

export default Manager