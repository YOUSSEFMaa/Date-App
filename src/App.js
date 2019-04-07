import React, { Component } from 'react';
import './App.css';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.handleDayChange1 = this.handleDayChange1.bind(this);
    this.handleDayChange2 = this.handleDayChange2.bind(this);
    this.state = {
      selectedDay1: undefined,
      selectedDay2: undefined,
      count : 0
    };
  }


  render() {

    const { selectedDay1 } = this.state;
    const { selectedDay2 } = this.state;



    return (
      <div>
        <br /><br /><br /><br /><br />

      <div className = "h-100 d-flex justify-content-center" >
      <div className="jumbotron my-auto">
      <h1 ><kbd>Date App</kbd></h1>
          {selectedDay1 && <p>Day: {selectedDay1.toLocaleDateString()}</p>}
          {!selectedDay1 && <p>Choose a day</p>}
          <DayPickerInput onDayChange={this.handleDayChange1} />
          {selectedDay2 && <p>Day: {selectedDay2.toLocaleDateString()}</p>}
          {!selectedDay2 && <p>Choose a day</p>}
          <DayPickerInput onDayChange={this.handleDayChange2} /><br /><br />
        <button onClick = {this.HandleIncrement} className="btn btn-secondary btn-sm"> Number of Days </button><br />
        <span className ={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
      </div>
      </div>

    );
  }




  HandleIncrement =() =>{
    var res = this.FormatDate();
    this.setState({count : res})

  }

  FormatDate() {

    const { selectedDay1 } = this.state;
    console.log(selectedDay1);
    const { selectedDay2 } = this.state;
    const a = String(selectedDay1).split(' ');
    const b = String(selectedDay2).split(' ');

    var c = this.GetMonth(String(a[1]));
    var d = this.GetMonth(String(b[1]));

    var date1 = Date.UTC(Number(a[3]),c,Number(a[2]));
    var date2 = Date.UTC(Number(b[3]),d,Number(b[2]));


    const diffDays = Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));


    return Math.abs(diffDays) + ' Jours';
  }

  GetMonth(expr){
    var a = 0;
    switch (expr) {
      case 'jan':
        a=0;
      break;
      case 'Feb':
        a=1;
      break;
      case 'Mar':
        a=2;
      break;
      case 'Apr':
        a=3;
      break;
      case 'May':
        a=4;
      break;
      case 'Jun':
        a=5;
      break;
      case 'Jul':
        a=6;
      break;
      case 'Aug':
        a=7;
      break;
      case 'Sep':
        a=8;
      break;
      case 'Oct':
        a=9;
      break;
      case 'Nov':
        a=10;
      break;
      case 'Dec':
        a=11;
      break;
      default:
    }
    return a;
  }
  
  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){

    const {count} =this.state;
    return count === 0 ? 'Zero Jours' : count;
  }

  handleDayChange1(day) {
    this.setState({ selectedDay1: day });
}
  handleDayChange2(day) {
  this.setState({ selectedDay2: day });
}

}


export default App;
