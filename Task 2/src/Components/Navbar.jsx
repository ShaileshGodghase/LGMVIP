import React, { useState } from 'react'
import axios from 'axios';
import DisplayUsers from './DisplayUsers';
import Spinner from './Spinner';

function Navbar() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const styles = {
        width: "80%",
        margin: "0 auto",
        padding: "20px",
    }
    function getUsers(e){
        e.preventDefault();
        setLoading(true);
        axios.get('https://reqres.in/api/users?page=1')
        .then(res =>{
            setUsers(res.data.data);
            setLoading(false)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="font-semibold text-xl tracking-tight">Shailesh</span>
                </div>
                <div className="inline-block flex-grow lg:flex lg:justify-center lg:items-center lg:w-auto sm:justify-center sm:items-center">
                    <a href="/" onClick={(e)=>{getUsers(e)}} className="inline-block text-2xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white lg:mt-0">Get Users</a>
                </div>
            </nav>

            <div className="content grid lg:grid-cols-3 gap-4 sm:grid-cols-2" style={styles}>
                {users.length === 0 ? "Click On button To Get Users" : ""}
                {loading && <Spinner />}
                {
                !loading && users.map((user) => { 
                    return (
                        <DisplayUsers 
                        key={user.id}  
                        avatar={user.avatar} 
                        first_name={user.first_name} 
                        last_name={user.last_name} 
                        email={user.email} 
                        />)
                    })
                }
            </div>
        </>
    )
}

export default Navbar
