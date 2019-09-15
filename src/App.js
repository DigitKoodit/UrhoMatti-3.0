import React, { Component } from 'react';
import Frontpage from './views/Landing/Frontpage';
import Song from './views/Song/Song';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import TopBar from './components/TopBar';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
            <TopBar/>
                <Switch>
                    <Route exact path="/" component={Frontpage} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/:id" component={Song} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
