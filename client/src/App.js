import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css'

// util
import { StoreProvider } from './utils/GlobalState';

// pages
import HomePage from './pages/HomePage';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NoRoute from './pages/NoRoute';

// brands
import BMWProducts from './pages/Brands/BMW'
import M2 from './pages/BrandProducts/M2Products'
import M4 from './pages/BrandProducts/M4Products'

import MitsubishiProducts from './pages/Brands/Mitsubishi'
import Evo789 from './pages/BrandProducts/Evo789Products'
import EvoX from './pages/BrandProducts/EvoXProducts'

import SubaruProducts from './pages/Brands/Subaru'
import Sti from './pages/BrandProducts/StiProducts'
import Brz from './pages/BrandProducts/BrzProducts'

// global components
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer'

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <StoreProvider>
                    <Header />
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/bmw" component={BMWProducts} />
                        <Route exact path="/bmw/m2" component={M2} />
                        <Route exact path="/bmw/m4" component={M4} />

                        <Route exact path="/mitsubishi" component={MitsubishiProducts} />
                        <Route exact path="/mitsubishi/evo789" component={Evo789} />
                        <Route exact path="/mitsubishi/evox" component={EvoX} />

                        <Route exact path="/subaru" component={SubaruProducts} />
                        <Route exact path="/subaru/brz" component={Brz} />
                        <Route exact path="/subaru/sti" component={Sti} />

                        <Route component={NoRoute} />
                    </Switch>
                </StoreProvider>
                <div className="footer-ghost"></div>
                <Footer />
            </Router>
        </ApolloProvider>
    );
}

export default App;