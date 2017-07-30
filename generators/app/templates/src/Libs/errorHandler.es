'use strict';
const errorHandler = {
    error(app) {
        app.use(async(ctx, next) => {
            try {
                await next();
            } catch (err) {
                console.error(err);
                ctx.status = err.status || 500;
                ctx.body = await ctx.render('error/pages/500');
            }
        });
        app.use(async(ctx, next) => {
            await next();
            if (404 != ctx.status) return;
            ctx.status = 404;
            ctx.body = await ctx.render('error/pages/404');
        });
    }
};
export
default errorHandler;