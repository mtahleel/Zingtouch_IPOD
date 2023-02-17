import React from "react";
import ZingTouch from "zingtouch";

// implementing functionality of zingtouch to navigate through the menu list of sidebar
export default class MenuOptions extends React.Component {
  componentDidMount() {
    let element = document.getElementById("options");
    let activeRegion = new ZingTouch.Region(element);

    activeRegion.bind(element, "rotate", (event) => {
      event.stopPropagation();
      let menu = ["cover-flow", "music", "games", "settings"];
      let angle = Math.floor(event.detail.angle);

      const id = document.getElementsByClassName("active")[0].id;
      const index = menu.indexOf(id);
      document.getElementById(menu[index]).classList.remove("active");

      if ((angle >= 0 && angle <= 45) || (angle > 180 && angle <= 225)) {
        document.getElementById("cover-flow").classList.add("active");
      } else if ((angle > 45 && angle <= 90) || (angle > 225 && angle <= 270)) {
        document.getElementById("music").classList.add("active");
      } else if (
        (angle > 90 && angle <= 135) ||
        (angle > 270 && angle <= 315)
      ) {
        document.getElementById("games").classList.add("active");
      } else if (
        (angle > 135 && angle <= 180) ||
        (angle > 315 && angle <= 360)
      ) {
        document.getElementById("settings").classList.add("active");
      }
    });
  }

  render() {
    const { optionSelected, goBack } = this.props;
    return (
      <div id="options" draggable="false">
        <div id="menu" onClick={goBack}>
          MENU
        </div>
        <img
          id="previous"
          alt="previous"
          src="https://cdn-icons-png.flaticon.com/512/254/254437.png"
        />
        <img
          id="next"
          alt="previous"
          src="https://cdn-icons-png.flaticon.com/512/254/254428.png"
        />
        <img
          id="play-pause"
          alt="previous"
          src="https://cdn-icons-png.flaticon.com/512/7960/7960808.png"
        />
        <div id="select-option" onClick={optionSelected}></div>
      </div>
    );
  }
}
