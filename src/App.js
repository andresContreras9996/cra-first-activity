import { React, Component } from "react";
import "./App.css";
import { Avatar } from "./components/Avatar/avatar.component";
import { User } from "./components/User/user.component";
import { Hobbies } from "./components/Hobbies/hobbies.components";

const hobbies = [
  { name: "Golf", description: "Some Description", isActive: true },
  { name: "Soccer", description: "Some Description", isActive: true },
  { name: "Painting", description: "Some Description", isActive: false },
  { name: "Running", description: "Some Description", isActive: true },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      showHobbies: true,
    };
  }
  count = (arr) => {
    return arr.reduce((acc, cur) => {
      if (cur.isActive) {
        acc++;
      }
      return acc;
    }, 0);
  };

  checkHobbie = () => {
    this.setState((prevState, prevProps) => {
      return { showHobbies: !this.state.showHobbies };
    });
  };

  render() {
    return (
      <div className="App">
        <User name="Andres Contreras" description="Software Developer" age={25}>
          <Avatar />
        </User>
        <button onClick={this.checkHobbie}>Check Hobbies</button>
        {this.state.showHobbies ? (
          <Hobbies
            hobbies={hobbies}
            showHobbies={this.state.showHobbies}
            count={this.count}
          ></Hobbies>
        ) : <h1>Hobbies not allowed</h1>}
      </div>
    );
  }
}

export default App;
