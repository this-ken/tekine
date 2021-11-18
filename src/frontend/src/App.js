import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

class App extends React.Component {
  render() {
    return (
			<>
        <BrowserRouter>
          <div>
            <Layout/>
            <div>
              <Switch>
                <Route component={ Home } path="/" exact />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
