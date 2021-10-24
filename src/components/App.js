import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" component={StreamList} exact />
                    <Route path="/streams/new" component={StreamCreate} exact />
                    <Route path="/streams/edit/:id" component={StreamEdit} exact />
                    <Route path="/streams/delete/:id" component={StreamDelete} exact />
                    <Route path="/streams/:id" component={StreamShow} exact />
                </Switch>
            </Router>
        </div>
    );
};

export default App;