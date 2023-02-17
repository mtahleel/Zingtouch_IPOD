import React from "react";
import "./App.css";
import MenuOptions from "./MenuOptions";
import Screen from "./Screen";
import CoverFlow from "./CoverFlow";
import Music from "./Music";
import Games from "./Games";
import Settings from "./Settings";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItem: ""
    };
  }

  // functionality to click the highlighted sidebar menu
  optionSelected = () => {
    let menuOption = document.getElementsByClassName("active")[0]
      .firstElementChild.textContent;
    this.setState({
      menuItem: menuOption
    });
  };

  // functionality to go back from inside of sidebar menu
  goBack = () => {
    document.getElementById("Sidebar").style.display = "block";
    this.setState({
      menuItem: ""
    });
  };

  render() {
    // Components to be displayed based on menu selected
    let menu = this.state.menuItem;
    menu = menu.trim();
    let jsxVal;
    let classValue = "Screen";

    if (menu !== "") {
      document.getElementById("Sidebar").style.display = "none";
      classValue = "inside-menu";
    }

    if (menu === "Cover Flow") {
      jsxVal = <CoverFlow />;
    } else if (menu === "Music") {
      jsxVal = <Music />;
    } else if (menu === "Games") {
      jsxVal = <Games />;
    } else if (menu === "Settings") {
      jsxVal = <Settings />;
    }

    // Passing the functionalities and menu as props to be used by required components
    return (
      <div className="App">
        <Screen classValue={classValue} jsxVal={jsxVal} />
        <MenuOptions
          goBack={this.goBack}
          optionSelected={this.optionSelected}
        />
      </div>
    );
  }
}

export default App;
