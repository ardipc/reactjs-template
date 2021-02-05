import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Public from './routes/Public';
import Private from './routes/Private';

class App extends React.Component {

  state = {
    token: localStorage.getItem('token')
  }

  changeRoute = (value) => {
    this.setState({ token: value })

    if(value) {
      localStorage.setItem('token', value);
    } else {
      localStorage.clear();
    }
  }

  render() {
    const { token } = this.state;

    const MainContent = ({token}) => token ?
      <Private changeRoute={this.changeRoute} token={token} /> : <Public token={token} changeRoute={this.changeRoute} />;

    return (
      <MainContent token={token} />
    )
  }
}

export default App;
