'use strict';
import index from './indexController';
const controllerInit = {
    getAllrouters(app, router) {
        app.use(router(_ => {
            _.get('/', index.index());
            _.get('/index', index.index());
            _.get('/index.html', index.index());
            _.get('/index/index', index.index());
             _.get('/index/getdata', index.getData());
        }));
    }
};
export
default controllerInit;