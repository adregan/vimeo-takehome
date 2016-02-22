import React from 'react';

export class Loading extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      dots: '',
      intervalId: undefined
    };
    this.animate = this.animate.bind(this);
  }
  animate() {
    let dots = this.state.dots;
    if (dots.length === 3) {
      this.setState({dots: ''});
    }
    else {
      this.setState({dots: dots + '.'});
    }
  }
  componentDidMount() {
    let intervalId = window.setInterval(this.animate, 500);
    this.setState({intervalId});
  }
  componentWillUnmount() {
    window.clearInterval(this.state.intervalId);
  }
  render() {
    return (
      <p className="loading">{this.state.dots}LOADING{this.state.dots}</p>
    );
  }
}

export default Loading;