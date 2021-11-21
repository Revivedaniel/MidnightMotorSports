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
import Evo789 from './pages/BrandProducts/Evo789Products'
import EvoX from './pages/BrandProducts/EvoXProducts'
import SubaruProducts from './pages/Brands/Subaru'

import Nav from './components/Nav';
import Header from './components/Header';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Header />
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/bmw" component={BMWProducts} />

                        <Route exact path="/mitsubishi" component={MitsubishiProducts} />
                        <Route exact path="/mitsubishi/evo789" component={Evo789} />
                        <Route exact path="/mitsubishi/evox" component={EvoX} />

                        <Route exact path="/subaru" component={SubaruProducts} />
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;