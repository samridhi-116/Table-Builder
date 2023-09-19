import React, {useState} from 'react';
import {MdOutlineSearch} from 'react-icons/md';
import useSearch from '../utils/useSearch';
import { Link } from 'react-router-dom';

const Table = ({ data, dataItems }) => {

    const { searchData, filteredData, handleSearch } = useSearch(data);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const items = filteredData.slice(firstIndex, lastIndex);
    const npage = Math.ceil(filteredData.length / itemsPerPage);
    const totalPages = [...Array(npage + 1).keys()].slice(1);

    const prevPage = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1);
        }else{
            setCurrentPage(currentPage)
        }
    }
    const nextPage = () => {
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1);
        }
        else{
            setCurrentPage(currentPage)
        }
    }
    const moveToPage = (n) => {
        setCurrentPage(n)
    }

    // Sorting Columns 
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    const handleSortAsc = (column) => {
        setSortColumn(column);
        setSortDirection('asc');
    };
    const handleSortDes = (column) => {
        setSortColumn(column);
        setSortDirection('desc');
    };
    const sortedData = () => {
        if (sortColumn) {
          return [...items].sort((a, b) => {
            if (typeof a[sortColumn] === 'number' && typeof b[sortColumn] === 'number') {
              return sortDirection === 'asc' ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn];
            } else {
              return sortDirection === 'asc' ? a[sortColumn].localeCompare(b[sortColumn]) : b[sortColumn].localeCompare(a[sortColumn]);
            }
          });
        }
        return items;
    };

    return (
        <div>
            <div className="flex flex-row w-1/4 mx-auto">
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 border-solid border border-sky-900 rounded-l-md font-sans text-sm py-2 px-4 text-slate-400"
                    value={searchData}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <span>
                    <button 
                    className="border-solid border border-sky-900 rounded-r-md font-sans text-base py-2 px-4 text-white bg-sky-900 text-center"
                    >
                    <MdOutlineSearch className="text-xl"/>
                    </button>
                </span>   
            </div>
            <table className=' w-[95%] mx-auto table-auto my-6 border-separate border-spacing-2 border border-slate-400'>
                <thead>
                    <tr>
                        {dataItems.map((item) => (
                            <th key={item.key} className=' text-left'>{item.header}
                                <span>
                                    <button onClick={()=> handleSortDes(item.key)}> ↑ </button>
                                </span>
                                <span>
                                    <button onClick={()=> handleSortAsc(item.key)}> ↓ </button>
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData().map((item) => (
                        <tr key={item.id}>
                            {dataItems.map((itemData) => (
                                <td key={itemData.key}>{item[itemData.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='w-2/5 mx-auto my-6'>
                <ul className='flex justify-center'>
                    <li className='px-3 border border-black'>
                        <Link to='#' onClick={prevPage}>
                           Prev 
                        </Link>
                    </li>
                    {
                        totalPages.map((pageNumber, index) => (
                            <li key={index} className='px-3 border border-black'>
                                <Link to='#' onClick={()=>{moveToPage(pageNumber)}} >
                                    {pageNumber}
                                </Link>
                            </li>
                        ))
                    }
                    <li className='px-3 border border-black'>
                        <Link to='#' onClick={nextPage}>
                           Next 
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Table;