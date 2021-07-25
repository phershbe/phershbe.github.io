import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      list: []
    }
  }

  updateItem = (e) => {
    this.setState({name: e.target.value});
  }

  addItem = () => {
    const newItem = {
      name: this.state.name,
      id: Math.random()
    }
    const copiedList = [...this.state.list];
    this.setState({list: copiedList.concat(newItem)});
  }

  deleteItem = (id) => {
    const copiedList = [...this.state.list];
    this.setState({list: copiedList.filter(item => item.id !== id)});
  }
  
  render() {
    return (
      <>
      <input onChange={this.updateItem} />
      <br />
      <button onClick={this.addItem}>Add</button>
      <ul>{this.state.list.map(item => (
        <li key={item.id}>{item.name}<button onClick={() => this.deleteItem(item.id)}>X</button></li>
      )
      )}</ul>
      </>
    );
  }
}

export default App;
