'use strict';
import indexModel from '../Models/indexModel';
import config from '../config/config';
const indexController = {
    getData() {
        return async(ctx, next) => {
            const indexModelIns = new indexModel();
            const _data = await indexModelIns.getData();
            // logger.info('哈哈哈哈');
            ctx.body = _data;
        }
    },
    index() {
        return async(ctx, next) => {
            ctx.body = await ctx.render('index/pages/index.html', {
                title: "京程一灯"
            });
        }
    }
};
export default indexController;