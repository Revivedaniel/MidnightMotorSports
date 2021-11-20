import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css'

// pages
import HomePage from './pages/HomePage';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Products from './pages/Products';
import Contact from './pages/Contact';
import BMWProducts from './pages/Brands/BMW'
import MitsubishiProducts from './pages/Brands/Mitsubishi'
import SubaruProducts from './pages/Brands/Subaru'

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/Checkout" component={Checkout} />
                        <Route exact path="/Products" component={Products} />
                        <Route exact path="/Contact" component={Contact} />
                        <Route exact path="/BMW" component={BMWProducts} />
                        <Route exact path="/Mitsubishi" component={MitsubishiProducts} />
                        <Route exact path="/Subaru" component={SubaruProducts} />
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;