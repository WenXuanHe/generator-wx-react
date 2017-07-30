export default class indexModel {
    constructor(ctx) {
    }
    getData() {
        const _promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: ["KOA2","ES6/7","Vue2","Webpack2","Mocha"]
                });
            },1000);
        });
        return _promise;
    }
};