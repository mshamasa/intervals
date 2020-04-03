import React from "react";
import RepCounter from "./RepCounter";
import Counter from "./Counter";

let COUNT_DN_ID = null;

export default class SetCounter extends React.Component {
  state = {
    count: 0,
    displayText: "",
    start: false,
    currentSet: 1
  };

  componentDidMount() {
    this.startCountDown();
  }

  startInterval = countStop => {
    if (!COUNT_DN_ID) {
      let count = 1;
      COUNT_DN_ID = setInterval(
        st => {
          const secondsCounter = Math.floor((Date.now() - st) / 1000);

          if (secondsCounter === count) {
            count++;
            this.setState({ count });
          }

          if (secondsCounter === countStop) {
            this.startReps();
            clearInterval(COUNT_DN_ID);
            COUNT_DN_ID = null;
          }
        },
        10,
        Date.now()
      );
    }
  };

  startCountDown = () => {
    const num = 3;
    this.setState({ displayText: `Starting In ${num}`, count: 1 });
    this.startInterval(num);
  };

  startReps = () => {
    this.setState({ start: true });
  };

  startRestTimer = () => {
    const { on, off, reps } = this.props;
    const totalRepCount = (on + off) * reps;
    this.setState({
      displayText: `Starting Again In ${totalRepCount}`,
      count: 1
    });
    this.startInterval(totalRepCount);
  };

  handleRepsCompleted = () => {
    this.setState({ start: false });
    if (this.state.currentSet > this.props.sets) {
      this.startRestTimer();
    } else {
      this.setState({ count: "", displayText: "" });
    }
  };

  render() {
    const { on, off, reps } = this.props;
    const { start, count, displayText } = this.state;

    if (!start) {
      return <Counter count={count} displayText={displayText} />;
    }

    return (
      <RepCounter
        on={on}
        off={off}
        reps={reps}
        repsCompleted={this.handleRepsCompleted}
      />
    );
  }
}
