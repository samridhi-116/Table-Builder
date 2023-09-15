import React, { useEffect, useState } from 'react'
import Table from './Table';

const Products = () => {
    const [productsData, setProductsData] = useState([]);
    
    useEffect(()=>{
      getProductsData();
    },[])

    const getProductsData = async () => {
        const data = await fetch('https://dummyjson.com/products');
        const json = await data.json();
        setProductsData(json?.products);
    }
    console.log(productsData)
    const productItems = [
      { key: 'id', header: 'Product ID' },
      { key: 'title', header: 'Title' },
      { key: 'price', header: 'Price' },
      { key: 'rating', header: 'Rating' },
      { key: 'brand', header: 'Brand' },
      { key: 'category', header: 'Category' },
  ];
  return (
    <div>
        <Table data={productsData} dataItems={productItems} />
    </div>
  )
}

export default Products;