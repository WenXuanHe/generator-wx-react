let React = require('react');
let ReactDOMServer = require('react-dom/server');
let Provider = require('react-redux').Provider;
let Home = require('../public/src/components/Home');
let getStore = require('../public/src/redux/store/index');
let { StaticRouter } = require('react-router');

module.exports = function(initData){
    let store = getStore(initData);
    let html = ReactDOMServer.renderToString(
        <Provider store={store}>
        <StaticRouter>
            <Home />
        </StaticRouter>
        </Provider>
    );
    return html;
}
