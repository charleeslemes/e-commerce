import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/Header';
import Masculino from './components/pages/Masculino';

export default function Router(){
    return(
    <BrowserRouter>
    <Header/>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/masculino" component={Masculino}/>

    </Switch>
    </BrowserRouter>

    )
} 
