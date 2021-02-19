import React from 'react';
import './App.css';
import QuoteMachine from './QuoteMachine';

// function App() {
//   return (
//     <div className="App">
//       <QuoteMachine />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <QuoteMachine/>
      </div>
    )
  }
}

export default App;
