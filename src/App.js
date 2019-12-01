import React, { Component } from 'react';
import LandingPage from './views/Landing/LandingPage';
import Song from './views/Song/Song';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from './components/TopBar';
import Category from './views/Category/Category';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
            <TopBar/>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/:id(\d+)" component={Song} />
                    <Route path="/:title(Juhlavat|Joulu|<3|Rock|Tupsulaulut|Sitsit|<40 vol.|>40 vol.|Undefined|Tuhmeliinit!|Älä laula!)/" component={Category} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
