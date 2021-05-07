import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import NFTDetails from './components/NFT-Details';

const App = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Main} />
        <Route path="/nft/:id" component={NFTDetails} />
    </Router>
);

export default App;
