import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// state
import EventsState from './context/events/eventsState';

// components
import Home from './components/home/home.component';
import Events from "./components/events/events.component";
import Users from './components/users/users.component';
import Header from './components/header/header.component';
import Posts from './components/posts/posts.component';

// state 

function App() {
  return (
    <EventsState>
      <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/eventos" component={Events} />
            <Route exact path="/usuarios" component={Users} />
            <Route exact path="/posts" component={Posts} />
        </Switch>
      </Router>
    </EventsState>
  );
}

export default App;
