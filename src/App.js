import React, { Component } from 'react';
import './App.css';
import ModelDetails from './components/ModelDetails';
import {connect} from 'react-redux';

class App extends Component {
  state = {
    data: {
      "Ivel Z3": {
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
      },
      "Bally Astrocade": {
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
      },
      "Sord M200 Smart Home Computer": {
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
      },
      "Commodore 64": {
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
      }
    }
  };

  renderComputer(computer) {
    return (
      <option value={computer[0]} key={computer[0]}>{computer[0]} ({computer[1].year})</option>
    );
  }

  render() {  
    return (
        <div className="App">
         <ModelDetails computers={this.props.computers}/>
          <select onChange = {this.updateSelections} value = {this.state.value} >
            <option value="">pick a model</option>
            {Object.entries(this.state.data).map(this.renderComputer)}
          </select>
          <button onClick={this.handleAddButtom}>Add</button> 
        </div>
    );
  }

  updateSelections = (event) => {
    const name = event.target.value;
    const selectedObject = {
      name: name,
      ...this.state.data[name]
    };
    this.setState({selected: selectedObject});
  }

  handleAddButtom = () => {
    if (this.state.selected === undefined || this.state.selected.name === "") {
      return;
    }
    return this.props.dispatch(addComputer(this.state.selected));
  }
}

const addComputer = function(selected) {
  return {
    type: ADD_COMPUTER,
    payload: selected
  };
}

const mapStateToProps = (computers) => {
  return {
    computers: computers
  };
}

export const ADD_COMPUTER = "ADD_COMPUTER";
export default connect(mapStateToProps)(App);