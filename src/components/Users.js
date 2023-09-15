import React, {useEffect, useState} from 'react'
import Table from './Table';

const Users = () => {
    const [userData, setUserData] = useState([]);

    useEffect(()=>{
        getUsersData();
    },[])

    const getUsersData = async () => {
        const data = await fetch('https://dummyjson.com/users');
        const json = await data.json();
        setUserData(json?.users);
    }
    console.log(userData)
    const userColumns = [
        { key: 'id', header: 'User ID' },
        { key: 'username', header: 'Username' },
        { key: 'firstName', header: 'First Name' },
        { key: 'lastName', header: 'Last Name' },
        { key: 'age', header: 'Age' },
        { key: 'bloodGroup', header: 'Blood Group' },
    ];

  return (
    <div>
        <Table data={userData} columns={userColumns} />
    </div>
  )
}

export default Users