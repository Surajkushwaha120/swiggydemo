import React from 'react'
import { Component } from 'react'
import Profile from './Profile'
import Header from "./Header"
class About extends Component{
    render (){
        return (
            <div>
                <Header />
                <h1>About us Page</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates optio, delectus quaerat expedita ab eligendi?
                </p>
                <Profile  xyz="abc" />
              
              
            </div>
        )
    }
}

export default About;