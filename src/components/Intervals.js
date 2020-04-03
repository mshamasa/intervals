import React from "react";

import SetCounter from "./SetCounter";

import "./Intervals.css";

export default class Intervals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      on: "",
      off: "",
      reps: "",
      sets: "",
      rest: "",
      startReps: false
    };
  }

  handleChange = e => {
    const { target } = e;
    this.setState({ [target.id]: target.value });
  };

  handleStart = () => {
    const { on, off, reps, sets, rest } = this.state;
    if (!on || !off || !reps || !sets || !rest) {
      return null;
    }
    this.setState({ startReps: true });
  };

  handleStop = () => {
    this.setState({
      on: "",
      off: "",
      reps: "",
      sets: "",
      rest: "",
      startReps: false
    });
  };

  render() {
    const { on, off, reps, sets, rest, startReps } = this.state;
    const totalRepCount =
      (parseInt(on, 10) + parseInt(off, 10)) * parseInt(reps, 10);

    return (
      <div className="IntervalsContainer">
        <div className="IntervalsInput">
          <input
            onChange={this.handleChange}
            id="on"
            type="text"
            placeholder="on"
            value={on}
          />
          <input
            onChange={this.handleChange}
            id="off"
            type="text"
            placeholder="off"
            value={off}
          />
          <input
            onChange={this.handleChange}
            id="reps"
            type="text"
            placeholder="reps"
            value={reps}
          />
          <input
            onChange={this.handleChange}
            id="sets"
            type="text"
            placeholder="sets"
            value={sets}
          />
          <input
            onChange={this.handleChange}
            id="rest"
            type="text"
            placeholder="rest in minutes"
            value={rest}
          />
          <div className="ButtonContainer">
            {!startReps && <button onClick={this.handleStart}>Start</button>}
            {startReps && <button onClick={this.handleStop}>Clear</button>}
          </div>
        </div>
        {startReps && (
          <SetCounter
            on={on && parseInt(on, 10)}
            off={off && parseInt(off, 10)}
            reps={reps && parseInt(reps, 10)}
            sets={sets && parseInt(sets, 10)}
            rest={rest && parseFloat(rest, 10)}
            totalRepCount={totalRepCount}
          />
        )}
      </div>
    );
  }
}
