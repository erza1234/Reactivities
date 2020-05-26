import React ,{Component}from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  state={
    values:[]
  }
  
  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
    .then((response)=>{
      
      this.setState({
        values : response.data
      })
    })
  }
  
  render(){
    return (
      <div className="App">
          <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Friends</Header.Content>
    </Header>
          <ul>
            {this.state.values.map((value:any)=>(
              <li>{value.name}</li>
            )
            )}
          </ul>
      
      </div>
    );

  }
  
}

export default App;
