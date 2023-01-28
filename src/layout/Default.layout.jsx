import React, { Component } from 'react'
import Navbar from "../components/Navbar/Navbar.Component"

const DefaultLayoutHoc = 
(Component)=>
({...props})=>{
    return (
        <div>
            <Navbar />
            <Component {...props} />
            <div>
                <p>© Copyright, Mohammed Bilal</p>
            </div>
        </div>
    )
}

export default DefaultLayoutHoc
