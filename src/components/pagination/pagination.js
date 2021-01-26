import React from 'react';
import './pagination.styles.css';

const Pagination = ({elementsPerPage, TotalElements, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(TotalElements / elementsPerPage); i++) {
    pageNumbers.push(i);
  }
  return(    
    <ul className="pagination-container">
      {pageNumbers.map(number =>(
        <li 
          key={number} 
          className="page-item page-selector"
          onClick={ ()=> paginate(number)}
        >          
          { number }                     
        </li>
      ))}
    </ul>
  )
}

export default Pagination;