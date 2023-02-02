import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'
// Pages import Here 
import Company from "./pages/Company";
import Contact from "./elements/contact/Contact";
import Error from "./pages/Error";
// Import Css Here 
import './assets/scss/style.scss';


const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={Company}/>
                    <Route path={`${process.env.PUBLIC_URL + "/contact"}`} exact component={Contact}/>
                    <Route path="*" exact component={Error}/>
                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App
