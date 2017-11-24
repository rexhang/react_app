import React, { Component } from 'react';

// import { BrowserRouter as Router, /*HashRouter,*/ IndexRoute, Match, Route, Link, IndexLink, Redirect, Switch } from 'react-router-dom'

import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

// import { Redirect } from 'react-router-dom'





import CheckboxGroups from './components/CheckboxGroups.jsx';
import CheckboxGroups2 from './components/CheckboxGroups2.jsx';
import CheckboxGroups3 from './components/CheckboxGroups3.jsx';
import CheckboxGroups4 from './components/CheckboxGroups4.jsx';
import NotFound from './components/NotFound.jsx';


import Bar from './Bar.jsx';

import Login from './components/Login.jsx';





const CheckboxGroups4_props = {
   fruit: 'Orange4'
}

const Routers = () => (
    <div>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    
                    <Route exact path="/login" component={Login} />

                    <Route path="/index">
                        <div>
                            <Bar />
                            <Switch>
                                <Route exact path="/index/" component={CheckboxGroups} />
                                <Route exact path="/index/CheckboxGroups" component={CheckboxGroups} />
                                <Route exact path="/index/CheckboxGroups2" component={CheckboxGroups2} />
                                <Route exact path="/index/CheckboxGroups3" component={CheckboxGroups3} />
                                <Route exact path="/index/CheckboxGroups4/:id" render={(match) => {
                                    // console.log(match);
                                    return <CheckboxGroups4 {...CheckboxGroups4_props} />
                                }} />
                                {/*在react-router v4中，有两种常见的渲染组件的方式：component和render。
                            前者是使用React.createElement方法新建一个元素，而后者仅仅是调用现有组件的render方法。*/}
                            </Switch>
                        </div>
                    </Route>

                    <Route exact path='/404' component={NotFound} />
                    
                    <Redirect from='*' to='/404' />
                            
                </Switch> 
            </div>
        </Router>
    </div>
);

export default Routers;
