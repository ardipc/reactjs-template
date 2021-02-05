import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';

import {
  Container
} from 'react-bootstrap';

import Navigation from '../layouts/Navigation';
import Home from '../screens/home/Index';
import News from '../screens/news/Index';
import Blogs from '../screens/blogs/Index';

class Public extends React.Component {

  state = {

  }

  render() {
    return (
      <Router>
        <Navigation changeRoute={this.props.changeRoute} token={this.props.token} />

        <Container fluid style={{marginTop: '15px'}}>
          <Switch>
            <Route path="/blogs" component={Blogs} />
            <Route path="/news" component={News} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Container>

      </Router>
    )
  }

}

export default Public;
