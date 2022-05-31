import React from 'react'
import "../style/table.css";

const skilltable = () => {
  return (
    <div>
      <div className='table_heading'>  
       <h2>Skill Table of Employee</h2>
       <hr></hr>
      </div>
        <table className='table1'>
          <tr className='t_row_head'>
            <th  className='t_head'>SN</th>
            <th className='t_head'>Skill</th>
            <th className='t_head'>Rating</th>
          </tr> <br></br>
          <tr className='t_row_data'>
            <td className='t_data' >1</td>
            <td className='t_data'>----------</td>
            <td className='t_data'>--</td>
          </tr> <br></br>
        </table>
    </div>
  )
}

export default skilltable