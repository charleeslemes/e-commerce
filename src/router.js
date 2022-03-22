import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/Header';

export default function Router(){
    return(
    <BrowserRouter>
    <Header/>
    <Switch>
        <Route exact path="/" component={Home}/>
    </Switch>
    </BrowserRouter>

    )
} 
