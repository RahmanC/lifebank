
import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({dataPerPage, totalData, paginate}: any) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalData / dataPerPage); i++ ) {
        pageNumbers.push(i)
    }

  return (
    <div>
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                   
           
                    <li key={number} className='page-item'>
                        <Link onClick={() => paginate(number)} to='#' className='page-link'>
                            {number}
                        </Link>
                    </li>
                      
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Pagination