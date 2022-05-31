import React from 'react'
import "../style/emp.css"; 
import SkillTable from './SkillTable'

const EmpDetails = () => {
  return (
    <div>
    <div>
        <div className='emp_head'>
        <h2 >Employee Details :-</h2>
        <hr></hr>
      </div>
   <div className='emp_detail'>
       <div  className='m1' >
       <div>Name :- </div>
       <div>--------</div>
       </div>
       <div className='m1'>
           <div>OHR ID :- </div>
           <div>-------</div>
       </div>
   </div> 
   </div>
   <SkillTable />
   </div>
    )
}

export default EmpDetails