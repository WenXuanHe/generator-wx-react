let router = require('koa-router')();
////支持jsx语法
require('node-jsx').install();
router.prefix('/');

let buildServerRenderByReact = require('../helper/serverRenderByReact');
let initData = require('../public/src/redux/store/data');

/**
 * 刷新的时候才走后端路由，不刷新时走前端路由
 */
router.get('/hello', async function (ctx, next) {

  await ctx.render('index', {
    initialData: JSON.stringify(initData)
  });

});

/**
 * react SPA的首页
 */
router.get('/index', async function (ctx, next) {
  try {
    let html = buildServerRenderByReact(initData);
    await ctx.render('index', {
      initialHTML: html,
      initialData: JSON.stringify(initData)
    });
  } catch (e) {

  }

});

module.exports = router;
