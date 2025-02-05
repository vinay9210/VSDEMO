// function App() {
//   return (
//     <div className="App">
//       <h1 style={{colour:"yellow"}}>s.vinay</h1>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react'
import CBCPropEx from './propsex/CBCPropEx'

export default class App extends Component {
  render() {
    return (
      <div>
        <CBCPropEx
        username="Varshini"
        age={20}
        hobbies={["Cooking", "Playing"]}
        address={{city:"HYD", area:"manikonda"}}
        sendFun={function(){alert("hi")}}
        />
      </div>
    )
  }
}