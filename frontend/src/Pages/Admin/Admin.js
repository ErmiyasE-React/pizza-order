import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader'; 

function Admin (){
    return(
        <>
            <AdminHeader/>
            <Outlet/>
       </>
    );
}

export default Admin;