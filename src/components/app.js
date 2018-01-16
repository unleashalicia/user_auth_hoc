import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './nav';
import {Route} from 'react-router-dom';
import Home from './home';
import About from './about';
import SecretList from './secret_list';
import ProtectedStuff from './protected_stuff';
import auth from '../hoc/auth';

const App = () => (
    <div className="container">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/secret-list" component={SecretList}/>
        <Route path="/protected-stuff" component={auth(ProtectedStuff)}/>
    </div>
);

export default App;
