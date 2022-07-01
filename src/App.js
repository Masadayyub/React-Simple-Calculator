import React from 'react';
import ReactDOM from 'react-dom';

class Calcu extends React.Component {
  constructor() {
    super();
    this.state = {num1:1,num2:1,num3:0};
  }
  plusNum = () => {
    this.setState({num3:this.state.num1+this.state.num2});
    this.setState({num1:this.state.num1+this.state.num2});
  }

  minusNum = () => {
    this.setState({num2:this.state.num1-this.state.num2});
    this.setState({num3:this.state.num1-this.state.num2});


  }
  render() {
    return <div>
      <button onClick={this.plusNum}>Plus</button>;
      <p>{this.state.num1}</p>

      <button onClick={this.minusNum}>Minus</button>;
      <p>{this.state.num2}</p>

      <p>result is {this.state.num3}</p>

    </div> 
  }
}

ReactDOM.render(<Calcu />, document.getElementById('root'));

export default Calcu;
