import { useState, useEffect } from 'react';

const useSearch = (data) => {
  const [searchData, setSearchData] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.values(item).some((value) => 
      {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchData.toLowerCase());
        }
        if (typeof value === 'number') {
          return value.toString().toLowerCase().includes(searchData.toLowerCase());
        }
      })
    );
    setFilteredData(filtered);
    }, [data, searchData]);

    const handleSearch = (newSearch) => {
        setSearchData(newSearch);
    };
    return {
        searchData,
        filteredData,
        handleSearch,
    };
};

export default useSearch;
