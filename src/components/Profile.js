import { Component } from "react";
import React from 'react'


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
    userInfo: {
      name: "Dummy name",
      location: "Dummy Location",

    },
    };

    console.log("Child - Constructor First Child");
  }

  async componentDidMount() {

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    console.log(json); 


    this.setState({
      userInfo: json,
    })
   
   
    console.log("child - componentDidMount First Child");
  }


  componentDidUpdate(){
    console.log("hii i am update");

  }

  componentWillUnmount(){
    console.log("ComponentsWillUnmount Call");
  }

  render() {
    const { count } = this.state;
    console.log("Child Render first child");
    return (
      <div>
        <h1>Proile Class Components</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name:{this.state.userInfo.name}</h2>
        <h2>Location:{this.state.userInfo.location}</h2>
        <h2>Count:{count}</h2>
        {/* <button onClick={() => {
            this.setState({
                count:1,
               
            })
        }}>SetCount</button> */}
      </div>
    );
  }
}
export default Profile;
