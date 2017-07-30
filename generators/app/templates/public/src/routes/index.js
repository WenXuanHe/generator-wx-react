let React = require('react');
let { BrowserRouter , Route , Redirect, Switch, StaticRouter} = require('react-router-dom');
let Bundle = require('../components/Bundle.js');
let Home = require('../components/Home.js');
let Hello =  require('bundle-loader?lazy&name=writer!../components/Hello.js');

const initialState = window['_INITIAL_STATE_'] || {};


const hello = (props) => (
  <Bundle load={Hello}>
    {(Component) => <Component {...props}/>}
  </Bundle>
)


let router = (
    <BrowserRouter context={initialState} basename='/'>
        <div>
            <Switch>
                <Route path="/index"  exact  component={Home} />
                <Route path="/hello"  component={hello} />

                <Redirect from="/" to="/index" />
            </Switch>
        </div>
    </BrowserRouter>
)

module.exports = router;
