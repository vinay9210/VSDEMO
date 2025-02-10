// import React, { Component } from 'react';
// import CBCPropEx from './CBCPropEx';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <CBCPropEx
//           username="s.vinay"
//           age={20}
//           hobbies={["Cooking", "Playing"]}
//           address={{ city: "HYD", area: "manikonda" }}
//           sendfun={function() { alert("hi"); }}
//         />
//       </div>
//     );
//   }
// }
import React from "react";
// import CBCStateEx from "./stateexamples/CBCStateEx";
import UseEffectEx from "./hookexamples/UseEffectEx";

const App = () => {
  return (
    <div>
      <UseEffectEx />
    </div>
  );
};

export default App;