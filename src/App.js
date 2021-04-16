import React, { Component } from 'react'
import './App.css';
import CardList from './components/card-list/CardList'
import Input from './components/Input/Input'

class App extends Component {
  constructor(){
    super()

    this.state = {
      monsters:[],
      searchField:""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(data => this.setState({monsters:data}))
  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }


  render(){
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
       monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
      return (
        <div className="App">
          <Input 
          type = "search"
          placeholder = "Search Monster"
          handleChange = { this.handleChange }
          />
          <CardList monsters={filteredMonsters}/>
        </div>
      );
  
  }
}
export default App;
