import React from 'react'
import "../style/search_emp.css";
import { Link } from 'react-router-dom';

const SearchEmp = () => {
  return (
    <div>
      <div className='h2'>
        <h2 >Search Employee :-</h2>
        <hr></hr>
      </div>
    <div className='search-emp'>
    <input type="text" id="emp_name" placeholder="Employee Name" name="empname"></input>
      <input type="text" id="ohr_id" placeholder="OHR ID" name="OHRID"></input>
      <Link to="/emp-details">
      <button className='btn'>Search</button>   
      </Link>
    </div>
    </div>
  )
}

export default SearchEmp