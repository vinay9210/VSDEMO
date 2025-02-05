import React, { Component } from 'react'

export default class CBCPropEx extends Component {
  render() {
    console.log(this);
    return (
      <div>CBCPropEx

        <h1>{this.Props.username}</h1>
        <h2>{this.Props.age}</h2>
        {
            this.Props.hobbies.map(hobby=>{
                return <li>{hobby}</li>
            })
        }
        <h1>{this.Props.address.city}</h1>
        <button onClick={this.Props.sendfun}>Click</button>
      </div>
    )
  }
}