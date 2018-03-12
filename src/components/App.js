import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Landing from './Landing';
import Login from './Login';
import Register from './register/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;
