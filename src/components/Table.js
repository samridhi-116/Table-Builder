import React from 'react';
import {MdOutlineSearch} from 'react-icons/md';
import useSearch from '../utils/useSearch';

const Table = ({ data, dataItems }) => {

    const { searchData, filteredData, handleSearch } = useSearch(data);

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
                className="border-solid border border-sky-900 rounded-r-md font-sans text-base py-2 px-3 text-white bg-sky-900 text-center"
                >
                <MdOutlineSearch className="text-xl"/>
                </button>
            </span>   
        </div>
        <table className=' w-4/5 mx-auto table-fixed my-6 border-separate border-spacing-2 border border-slate-400'>
            <thead>
                <tr>
                    {dataItems.map((item) => (
                        <th key={item.key} className=' text-left'>{item.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item) => (
                    <tr key={item.id}>
                        {dataItems.map((itemData) => (
                            <td key={itemData.key}>{item[itemData.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default Table;