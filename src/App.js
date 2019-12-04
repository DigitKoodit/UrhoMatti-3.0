import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from './components/TopBar';
import LandingPage from './views/Landing/LandingPage';
import Song from './views/Song/Song';
import Category from './views/Category/Category';
import Hymni from './views/Specials/Hymni';
import Rules from './views/Specials/Rules';
import db from './db.json';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
            <TopBar/>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/:id(\d+)" render={(sid) => <Song song={db["songs"].find((song) => (song.id) === sid.match.params.id)} />}/>
                    <Route path="/:title(Juhlavat|Joulu|<3|Rock|Tupsulaulut|Sitsit|<40 vol.|>40 vol.|Undefined|Tuhmeliinit!|Älä laula!)/" render={(sid) => <Category category={db["categories"].find((category) => (category.title) === sid.match.params.title)}/>} />
                    <Route exact path="/hymni" component={Hymni} />
                    <Route exact path="/saannot" component={Rules} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
