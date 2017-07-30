var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.redirect('/index');
});

module.exports = router;
