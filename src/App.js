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
            <div className="content--wrapper">
                <BrowserRouter>
                    <TopBar />
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route
                            path="/:id(\d+)"
                            render={(path) => <Song song={db["songs"].find((song) => (song.id) === parseInt(path.match.params.id))} />}
                        />
                        <Route
                            path="/:title(Juhlavat|Joulu|<3|Rock|Tupsulaulut|Sitsit|<40 vol.|>40 vol.|Undefined|Tuhmeliinit!|Älä laula!)/"
                            render={(path) => <Category category={db["categories"].find((category) => (category.title) === path.match.params.title)} songs={db["songs"].filter(song => song.categoryId === path.match.params.title)} />}
                        />
                        <Route exact path="/hymni" component={Hymni} />
                        <Route exact path="/tietovalueforlife" render={() => <Song song={db["?"][0]} />} />
                        <Route exact path="/saannot" component={Rules} />
                        <Route component={LandingPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
