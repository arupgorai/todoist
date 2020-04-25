import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/layout/Layout';
import Home from './containers/Home/Home';
import Todos from './containers/Todos/Todos';


const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/todos" component={Todos} />
                {/* anything.. route doesn't match will redirect to home path  */}
                <Redirect to="/" />
            </Switch>
        </Layout>
    )
}

export default App;